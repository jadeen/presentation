import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  return <div class="center">
    <h1>Carte d'identité(incomplète)</h1>


    <div class="flex identite">
      <img src="/photo.png" width="128" height="128" />
      <div>
        <p>Nom: Découflet</p>
        <p>Prénom: Mickaël</p>
        <p>Age: 28 ans</p>
        <p>Lieu de naissance: Caen</p>
      </div>
    </div>
  </div>
})