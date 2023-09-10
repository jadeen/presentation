import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export default component$(() => {
    useStyles$(styles);

    return <div class="fautes">
        <div>
            <h3>Qu'elle est ma note au bac écris de français ?</h3>
            
            <div class="flex">
                <img width="24" height="24"  data-emoji="👍" class="iiJ4W" alt="👍" aria-label="👍" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f44d/512.png=s24" data-iml="4936.4000000003725" />
                <p>15/20</p>
            </div>
            <div class="flex">
                <img width="24" height="24"  data-emoji="😂" class="iiJ4W" alt="😂" aria-label="😂" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f602/512.png=s24" data-iml="9048.5" />
                <p>7/20</p>
            </div>
            <div class="flex">
                <img width="24" height="24" data-emoji="🎉" class="iiJ4W" alt="🎉" aria-label="🎉" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f389/512.png=s24" data-iml="4936.5" />
                <p>3/20</p>
            </div>
            <div class="flex">
                <img width="24" height="24"  data-emoji="💖" class="iiJ4W" alt="💖" aria-label="💖" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f496/512.png=s24" data-iml="9045.5" />
                <p>10/20</p>
            </div>
        </div>
    </div>
})