"use strict";

export default function About(about) {
  let inner = `<div class="about">
  <div class="hello">
    <h5 class="hello_1">Hey🤗 I'm</h5>
    <h1 class="name">Andy <i class="fa-solid fa-code"></i></h1>
    <p class="hello_2">CS Student @ Boston College</p>
    <p class="hello_3">
      Aspiring full-stack developer living in Princeton, New Jersey
    </p>
    <p class="hello_4">
      Skills: Python • JavaScript • TypeScript • React • Git • Java • SQL
      • NodeJS • D3
    </p>
    <p class="hello_5">Pastimes: Fitness • Music • Anime • Chess • Gaming</p>
    <a class="resume" href="${about.resume}" target="_blank">My resume!</a>
  </div>
  <div class="pfp"><img src="${about.photo}" alt="PFP" /></div>
</div>`;
  return inner;
}
