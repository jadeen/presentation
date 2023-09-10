import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
     <h1> Mickaël Découflet</h1>
     <h2> Présentation Gouter</h2>
    </>
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
