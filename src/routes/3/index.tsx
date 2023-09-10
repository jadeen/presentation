import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  return <div class="center">
    <h1>Passion</h1>

    <div class="passions">
      <div class="passion">
        <img src="/cinema.png" height="72" width="72" />
        <p>Cinéma</p>
      </div>
    </div>
  </div>
})