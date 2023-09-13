import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);
  
  useVisibleTask$(({ cleanup }) => {
    var body = document.body;

    body.classList.add("purple");

    cleanup(() => {
      body.classList.remove("purple");
    });
  })

  return <div class="pro">
    <h1>Pro</h1>
    <div class="content">

      <div class="step">
        <h2>CDD Inthreat (Juin-Août 2017)</h2>

        <div>
          <img width="48" height="48" src="/inthreat.svg" alt="logo" />
        </div>
      </div>

      <div class="step">
        <h2>Stage à rythme alternée (Septembre 2017/Fevrier 2018)</h2>

        <div>
          <img width="48" height="48" src="/dedimisp.svg" alt="logo" />
          <img width="48" height="48" src="/sic.png" alt="logo" />
        </div>
      </div>

      <div class="step">
        <h2>Stage Fin d'étude (Mars - Fevrier 2018)</h2>

        <div>
          <img width="48" height="48" src="/wotcher.svg" alt="logo" />
          <img width="48" height="48" src="/virustotal.svg" alt="logo" />
          <img width="48" height="48" src="/fastir.png" alt="logo" />
        </div>
      </div>

      <div class="step">
        <h2>CDI Inthreat/SEKOIA/Sekoia.io</h2>

        <div>
          <img height="48" width="180" src="/logo-first.png" alt="logo" />
          <img width="48" height="48" src="/logo-doc.svg" alt="logo" />
          <img width="48" height="48" src="/io-last.png" alt="logo" />
          <img width="48" height="48" src="/sic2.svg" alt="logo" />
        </div>
      </div>
    </div>
  </div>
})