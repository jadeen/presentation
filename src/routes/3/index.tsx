import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  useVisibleTask$(({ cleanup }) => {
    var body = document.body;

    body.classList.add("sekoia");

    cleanup(() => {
      body.classList.remove("sekoia");
    });
  })

  return <div class="center">
    <h1>TITLE.Passion</h1>

    <div class="passions">
      <div class="passion">
        <img src="/cinema.png" height="72" width="72" />
        <p>Category.cinema</p>
      </div>
    </div>
  </div>
})