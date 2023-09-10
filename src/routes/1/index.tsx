import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  useVisibleTask$(({ cleanup }) => {
    var body = document.body;

    body.classList.add("green");

    cleanup(() => {
      body.classList.remove("green");
    });
  })

  return <>
    Presentation
  </>
})