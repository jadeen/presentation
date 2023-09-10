import { component$, Slot, useOnDocument, useStyles$, $ } from "@builder.io/qwik";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

const keyboardHandler = (event: any, nav: any) => {
      
  const routes = location.pathname.split('/').slice(0, -1)

  if (routes.length == 1) {
    nav('/1');

    return;
  }

  if (event.key == 'ArrowRight') {
    const path = parseInt(routes[1])

    nav(`/${path + 1}`);

    return;
  }

  if (event.key == 'ArrowLeft') {
    const path = parseInt(routes[1])

    const newPath = path - 1;

    nav(newPath === 0 ? '/' : `/${newPath}`);

    return;
  }

  if (event.key === 'ArrowDown') {
    const path = parseInt(routes[2] || '0')

    const newPath = path + 1;

    nav(`/${routes[1]}/${newPath}`);
  }
}

export default component$(() => {
  useStyles$(styles);

  const loc = useLocation();

  const nav = useNavigate();
  
  const routes = loc.url.pathname.split('/').slice(0, -1)

  useOnDocument(
    'keydown',
    $((event: any) => keyboardHandler(event, nav))
  );

  return (
    <>
      <main>
        <Slot />
      </main>

      <div class="nav">

        { routes.length > 1 && <>
          <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36" fill="currentColor"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
        </> }
      <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36" fill="currentColor"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
      </div>
    </>
  );
});
