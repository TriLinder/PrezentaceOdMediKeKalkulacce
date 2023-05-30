<script>
    import { _ } from "svelte-i18n";
</script>

<section data-auto-animate>
    <h2>{$_("countingIntroSlide.howDoYou")}</h2>
    <h2>{$_("countingIntroSlide.sum")}</h2>
    <h2>{$_("countingIntroSlide.inBinaryQuestion")}</h2>

    <aside class="notes">
        Ale jak se sčítá v binárce?
        No, nejdříve se musíme zeptat..
    </aside>
</section>

<section data-auto-animate>
    <h2>{$_("countingIntroSlide.howDoYou")}</h2>
    <h2 data-id="count">{$_("countingIntroSlide.count")}</h2>
    <h2>{$_("countingIntroSlide.inBinaryQuestion")}</h2>

    <aside class="notes">
        Jak se počítá v binárce?
        Ale vastně..
    </aside>
</section>

<section data-auto-animate>
    <h2>{$_("countingIntroSlide.howDoYou")}</h2>
    <h2 data-id="count">{$_("countingIntroSlide.countQuestion")}</h2>

    <aside class="notes">
        Jak se vůbec počítá?
    </aside>
</section>