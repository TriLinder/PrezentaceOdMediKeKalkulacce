<script>
    import 'reveal.js/dist/reveal.css';

    import Reveal            from 'reveal.js';
    import { onMount, tick } from 'svelte';
    import Presentation      from './Presentation.svelte';

    export let app;
    export let reveal;

    onMount(async () => {
        await tick();
        const deck = new Reveal(reveal);
        deck.initialize();
      });

    //i18n
    import { addMessages, init } from 'svelte-i18n';

    import cs from "./lang/cs.json";
    import en from "./lang/en.json";

    addMessages("cs", cs);
    addMessages("en", en);

    init({
        fallbackLocale: "cs",
        initialLocale: "cs"
    });

    //Fix country flag emojis on Windows
    import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

    polyfillCountryFlagEmojis();


    // confetti key
    import confetti from 'canvas-confetti';
    
    document.addEventListener("keydown", function(e) {
        if (e.key == "c") {
            confetti({
                disableForReducedMotion: false,
                particleCount: 1400,
                decay: 0.95,
                spread: 360,
                origin: {
                    x: 0.5,
                    y: 0.5
                }
            })
        }
    });
</script>

<svelte:head>
    <title>{app.name}</title>
</svelte:head>

<div class="reveal">
    <div class="slides">
        <Presentation/>
    </div>
</div>

