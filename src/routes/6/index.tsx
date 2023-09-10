import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import { Fireworks } from 'fireworks-js'

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  useVisibleTask$(() => {
    const container = document.querySelector('.ending')
    if (container) {
      const fireworks = new Fireworks(container, { /* options */ })
      fireworks.start()
    }
  })
  return <div class="ending">
    <div class="content-ending">
      <div class="card-ending">
        <h1>Merci !!!</h1>
      </div>
    </div>
  </div>
})