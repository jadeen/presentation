import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);
  
  useVisibleTask$(() => {
    var body = document.body;

    body.classList.add("purple");
  })

  return <div class="center">
    <h1>Ecole</h1>
    <div class="flex">
      <div class="ecole">
        <img width="100" height="120" src="/Epitech.webp" alt="logo" />
        <p>Promo 2018</p>
      </div>

      <div class="ecole laval">
        <img width="100" height="120" src="/laval.webp" alt="logo" />
        <p>2016-2017</p>
      </div>
    </div>
  </div>
})