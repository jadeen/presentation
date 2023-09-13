import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  return <div class="center">
    <img src="/orelsqn.jpg" height="500" width="885" />

    <div class="anecdote">
      <img src="/orelmagic.jpg" height="300" width="250"/>
      <p>29 Bd des Alliés, 14000 Caen</p>
    </div>
  </div>
})