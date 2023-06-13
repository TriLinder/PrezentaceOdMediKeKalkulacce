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

</script>

<svelte:head>
    <title>{app.name}</title>
</svelte:head>

<div class="reveal">
    <div class="slides">
        <Presentation/>
    </div>
</div>

