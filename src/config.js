module.exports = {
  jobCode: `EVZ_2021_0060_UK <br/>OCTOBER 2021`,
  disclaimer: `
    For Healthcare Professionals Only<br/>
    <span class="highlight-primary">Click here for UK Prescribing Information and Adverse Event Reporting</span>
  `,
  slides: [
    {
      content: `
        <h2 class="prelude">EVRENZO (roxadustat) is indicated for treatment of adult <br/>patients with symptomatic anaemia associated with CKD<sup>1</sup></h2>
        <h1 class="title">In anaemia of chronic kidney disease (CKD), <br/>the treatment landscape is changing</h1>
      `,
      background: {
        image: `url(${require('./assets/background.jpg')})`,
      },
      timeout: 4000,
    },
    {
      content: `
        <h1 class="title">Follow a new pathway to <br/>treat anaemia of CKD…</h1>
      `,
      background: {
        image: `url(${require('./assets/background.jpg')})`,
      },
      timeout: 4000,
    },
    {
      content: `
        <h1 class="title">EVRENZO™ harnesses the HIF pathway to <br/>stimulate erythropoiesis<sup>1,2</sup> </h1>
        <ul>
            <li>HIF (hypoxia-inducible factor) is a central regulator of erythropoiesis<sup>3</sup></li>
            <li>EVRENZO is the first treatment to activate the HIF pathway<sup>4</sup></li>
            <li>Through this action, EVRENZO mimics the body’s natural response to hypoxia<sup>2</sup></li>
        </ul>
      `,
      background: {
        color: `#007A33`,
      },
      timeout: 4000,
    },
    {
      content: `
        <div class="grid grid-3">
          <div>
              <p>This advert is intended for UK and EU audience only.</p>
              <p>Please note that indications and availability may vary in different countries.</p>
              <p><span class="underline">Refer to your local summary of product characteristics/</span> prescribing information for details.</p>
          </div>
          <ol>
            <li>EVRENZO SmPC.</li>
            <li>Del Vecchio L, LocateIIi F. Expert Opin Investig Drugs. <br/>2018;27(1):125-133.</li>
            <li>Locatelli F et al. Am J Nephrol. 2017;45:187-199.</li>
            <li>Sanghani NS, Haase VH. Adv Chronic Kidney Dis 2019; <br/>26:253–266.</li>
          </ol>
          <img src="${require('./assets/astellas-logo.svg')}" alt="Astellas"/>
        </div>
      `,
      background: {
        color: `#007A33`,
      },
      timeout: 3000,
    },
  ],
}
