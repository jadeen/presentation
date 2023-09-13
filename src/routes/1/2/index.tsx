import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  return <div class="center">
    <div class="grid">
      <img src="/chateau.jpg" width="350" height="260"/>
      <img src="/eglise.jpg" width="350" height="260"/>
      <img src="/foot.jpg" width="350" height="260"/>
      <img src="/marie.webp" width="350" height="260"/>
    </div>
  </div>
})