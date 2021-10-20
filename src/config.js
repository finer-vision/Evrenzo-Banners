const content = {
  colors: {
    primary: "#007A33",
  },
  backgroundImage: require("./assets/background.jpg"),
  jobCode: `EVZ_2021_0060_UK OCTOBER 2021`,
  logos: {
    evrenzo: require("./assets/evrenzo-logo.svg"),
    astellas: require("./assets/astellas-logo.svg"),
  },
  hcpDisclaimer: `
    For Healthcare Professionals Only<br/>
    <span class="highlight-primary">Click here for UK Prescribing Information and Adverse Event Reporting</span>
  `,
  intro: `
    <h2 class="prelude">EVRENZO (roxadustat) is indicated for treatment of adult patients with symptomatic anaemia associated with CKD<sup>1</sup></h2>
    <h1 class="title">In anaemia of chronic kidney disease (CKD), the treatment landscape is changing</h1>
  `,
  treatment: `
    <h1 class="title">Follow a new pathway to treat anaemia of CKD…</h1>
  `,
  erythropoiesis: `
    <h1 class="title">EVRENZO™ harnesses the HIF pathway to stimulate erythropoiesis<sup>1,2</sup> </h1>
    <ul>
        <li>HIF (hypoxia-inducible factor) is a central regulator of erythropoiesis<sup>3</sup></li>
        <li>EVRENZO is the first treatment to activate the HIF pathway<sup>4</sup></li>
        <li>Through this action, EVRENZO mimics the body’s natural response to hypoxia<sup>2</sup></li>
    </ul>
  `,
  references: `
    <ol>
      <li>EVRENZO SmPC.</li>
      <li>Del Vecchio L, LocateIIi F. Expert Opin Investig Drugs. 2018;27(1):125-133.</li>
      <li>Locatelli F et al. Am J Nephrol. 2017;45:187-199.</li>
      <li>Sanghani NS, Haase VH. Adv Chronic Kidney Dis 2019; 26:253–266.</li>
    </ol>
  `,
  disclaimer: `
    <div class="disclaimer">
        <p>This advert is intended for UK and EU audience only.</p>
        <p>Please note that indications and availability may vary in different countries.</p>
        <p><span class="underline">Refer to your local summary of product characteristics/</span> prescribing information for details.</p>
    </div>
  `,
};

const config = {
  content: content,
  backgroundImage: content.backgroundImage,
  jobCode: content.jobCode,
  hcpDisclaimer: content.hcpDisclaimer,
  billboard: {
    width: 720,
    height: 250,
    titleFontSize: 26,
    hcpDisclaimer: {
      fontSize: 8,
      top: 200,
      left: 25,
    },
  },
  leaderboard: {
    width: 728,
    height: 90,
    titleFontSize: 20,
    hcpDisclaimer: {
      fontSize: 8,
      top: 58,
      left: 9,
    },
  },
  mpu: {
    width: 300,
    height: 250,
    titleFontSize: 20,
    hcpDisclaimer: {
      fontSize: 8,
      top: 0,
      left: 17,
    },
  },
  skyscraper: {
    width: 160,
    height: 600,
    titleFontSize: 20,
    hcpDisclaimer: {
      fontSize: 8,
      top: 0,
      left: 14,
    },
  },
  "half-page": {
    width: 300,
    height: 600,
    titleFontSize: 20,
    hcpDisclaimer: {
      fontSize: 8,
      top: 0,
      left: 25,
    },
  },
  slides: {
    billboard: [
      { content: content.intro, timeout: 4000 },
      { content: content.treatment, timeout: 4000 },
      {
        content: content.erythropoiesis,
        backgroundColor: content.colors.primary,
        timeout: 4000,
      },
      {
        content: `
        <div class="grid grid-3">
          ${content.disclaimer}
          ${content.references}
          <img src="${content.logos.astellas}" alt="Astellas"/>
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
    ],
    leaderboard: [
      { content: content.intro, timeout: 3000 },
      { content: content.treatment, timeout: 4000 },
      {
        content: content.erythropoiesis,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
      {
        content: `
        <div class="grid">
            <img src="${content.logos.astellas}" alt="Astellas"/>
            ${content.references}
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
      {
        content: `
        <div class="grid">
            <img src="${content.logos.astellas}" alt="Astellas"/>
            ${content.disclaimer}
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 2000,
      },
    ],
    mpu: [
      { content: content.intro, timeout: 3000 },
      { content: content.treatment, timeout: 4000 },
      {
        content: content.erythropoiesis,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
      {
        content: `
        <div class="grid">
            <img src="${content.logos.astellas}" alt="Astellas"/>
            ${content.references}
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
      {
        content: `
        <div class="grid">
            <img src="${content.logos.astellas}" alt="Astellas"/>
            ${content.disclaimer}
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 2000,
      },
    ],
    skyscraper: [
      { content: content.intro, timeout: 4000 },
      { content: content.treatment, timeout: 4000 },
      {
        content: `
          ${content.erythropoiesis},
          <img src="${content.logos.astellas}" alt="Astellas"/>
        `,
        backgroundColor: content.colors.primary,
        timeout: 4000,
      },
      {
        content: `
        <div class="grid">
          ${content.disclaimer}
          ${content.references}
          <img src="${content.logos.astellas}" alt="Astellas"/>
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
    ],
    "half-page": [
      { content: content.intro, timeout: 4000 },
      { content: content.treatment, timeout: 4000 },
      {
        content: content.erythropoiesis,
        backgroundColor: content.colors.primary,
        timeout: 4000,
      },
      {
        content: `
        <div class="grid grid-3">
          ${content.disclaimer}
          ${content.references}
          <img src="${content.logos.astellas}" alt="Astellas"/>
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
    ],
  },
};

module.exports = config;
