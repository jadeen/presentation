import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);
  
  useVisibleTask$(() => {
    var body = document.body;

    body.classList.add("purple");
  })

  return <div class="center">
    <h1>Est ce que vous connaissez ce dessin ?</h1>
    <div class="flex">
      <img src="/zozor.png" height="120" width="120"/>
    </div>

    <div class="flex answer">
      <div class="flex">
        <img width="24" height="24"  data-emoji="😂" class="iiJ4W" alt="😂" aria-label="😂" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f602/512.png=s24" data-iml="9048.5" />
        <p>Non</p>
      </div>
      <div class="flex">
        <img width="24" height="24" data-emoji="🎉" class="iiJ4W" alt="🎉" aria-label="🎉" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f389/512.png=s24" data-iml="4936.5" />
        <p>Oui</p>
      </div>
    </div>
  </div>
})