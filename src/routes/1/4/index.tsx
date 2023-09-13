import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  return <div class="center">
    <img class="hero" src="/herouville.jpg" height="200" width="300"/>
    <img src="/maps.png" height="600" width="850" />
    <img class="ifs" src="/ifs.png" height="200" width="300"/>
  </div>
})

