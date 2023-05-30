<script>
    import { _, locale } from 'svelte-i18n';
</script>

<style>
    button {
        font-size: 2em;
    }
</style>

<section>
    <h3>LANGUAGE / JAZYK:</h3>
    <p>Click to select a language / Klikem vyber jazyk</p>

    <button on:click={function() {locale.set("cs")}}>🇨🇿</button>
    <button on:click={function() {locale.set("en")}}>🇬🇧</button>

    <hr>

    <p>{$_("languageSelectorSlide.helloWorld")}</p>
    <p>{$_("languageSelectorSlide.czechSpeakerNotes")}</p>
</section>