import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from "./index.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="center">
      <h1> Mickaël Découflet</h1>
      <h2> Présentation Goûter</h2>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Mickael Presentation",
  meta: [
    {
      name: "description",
      content: "Gouter mickael presentation",
    },
  ],
};
