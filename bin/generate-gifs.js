#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const puppeteer = require('puppeteer')

const BUILD_DIR = path.resolve(__dirname, '..', 'build')
const STORAGE_DIR = path.resolve(__dirname, '..', 'storage')

const billboardFile = path.join(BUILD_DIR, 'billboard.html')

if (!fs.existsSync(billboardFile)) {
  console.error('No billboard.html file in build directory')
  process.exit(1)
}

const config = {
  size: {
    width: 720,
    height: 250,
  },
};

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: config.size,
  })
  try {
    const page = await browser.newPage()
    await page.goto(`file://${billboardFile}`, { waitUntil: 'networkidle0' })

    async function screenshotSlide (index) {
      await page.screenshot({
        type: 'jpeg',
        path: path.join(STORAGE_DIR, `billboard-${index}.jpg`),
        quality: 100
      })
    }

    await page.evaluate(() => {
      window.state = window.state || {
        autoPlay: false,
        loop: false,
        slideIndex: -1,
      }

      // Disable slide transitions
      const slides = document.querySelectorAll('#carousel section')
      slides.forEach(slide => {
        slide.style.transition = 'none'
      })
    })

    async function nextSlide () {
      await page.evaluate(() => {
        const slideIndexEvent = new Event('nextslide')
        document.body.dispatchEvent(slideIndexEvent)
      })
    }

    for (let i = 0; i < 4; i++) {
      await screenshotSlide(i)
      if (i < 3) {
        await nextSlide()
      }
    }

    const input = path.join(STORAGE_DIR, 'billboard-*.jpg')
    const output = path.join(STORAGE_DIR, 'billboard.gif')

    execSync(`convert -delay 400 -loop 0 ${input} ${output}`)

    execSync(`rm -f ${input}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await browser.close()
    process.exit(0)
  }
})()
