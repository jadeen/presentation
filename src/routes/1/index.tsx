import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  useVisibleTask$(() => {
    var body = document.body;

    body.classList.add("green");
  })

  return <div class="center">
    <h1>Présentation</h1>
  </div>
})