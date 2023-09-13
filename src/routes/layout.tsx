import { component$, Slot, useOnDocument, useStyles$, $, useVisibleTask$, useSignal } from "@builder.io/qwik";
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

  const show = useSignal(false);

  useVisibleTask$(() => {
    const time = Math.floor(Math.random() * 300);

    console.log(time)

    setTimeout(() => {
      show.value = true;

      setTimeout(() => {
        show.value = false;
      }, 5e3)
    }, time * 1e3);
  })
  
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

      { show.value && <div class="notification">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#e3234d" width="18" height="18" viewBox="0 0 24 24"><path d="M15.535 8.465a.997.997 0 0 0-1.41 0L12 10.59 9.875 8.465a.997.997 0 0 0-1.41 1.41L10.59 12l-2.125 2.125a.997.997 0 0 0 1.41 1.41L12 13.41l2.125 2.125a.997.997 0 1 0 1.41-1.41L13.41 12l2.125-2.125a.997.997 0 0 0 0-1.41z"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9 14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"/></svg>
          <div class="overflow">
            <p class="title">An unexpected error occurred and you might be seeing inconsistent results.</p>
            <p class="description">We have been notified and are currently investigating. We apologize for the inconvenience.</p>
          </div>
      </div>
      }
    </>
  );
});
