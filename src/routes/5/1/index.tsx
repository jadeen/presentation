import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);
  
  return <div class="voyage">
    <h1>Voyage</h1>
    <div>
      <img height="75" width="110" src="/vietnam.png"/>
      <img height="75" width="110" src="/corea.svg"/>
    </div>

    <h2>Comment j'ai perdu 400 dollars ?</h2>
  </div>
})