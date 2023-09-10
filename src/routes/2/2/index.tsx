import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);
  
  useVisibleTask$(() => {
    var body = document.body;

    body.classList.add("purple");
  })

  return <div class="center">
    <img class="zero" src="/siteduzero.jpg" height="720" width="540" />
  </div>
})