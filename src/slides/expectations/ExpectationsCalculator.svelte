<script>
    import { _ } from 'svelte-i18n';
</script>

<style>
    img {
        height: 30rem;
        background: transparent;
        margin: 0 auto 0 auto !important;
    }

    .row {
        display: flex;
        align-items: center;
    }
</style>

<section data-auto-animate>
    <h2>{$_('expectationsTitle')}</h2>

    <img src="/assets/images/scientific-calculator.png" class="drop-shadow-lg" alt="Casio FX-61F Vědecká kalkulačka">
</section>

<section data-auto-animate>
    <h2>{$_('expectationsTitle')}</h2>

    <img src="/assets/images/scientific-calculator.png" style="opacity: .25; filter: saturate(0);" class="drop-shadow-lg" alt="Casio FX-61F Vědecká kalkulačka">

    <aside class="notes">
        Kalkulačka, o které dneska budeme mluvit, vám nepomůže při testu z matiky..
    </aside>
</section>

<section data-auto-animate>
    <h2>{$_('expectationsTitle')}</h2>

    <div class="row">
        <img src="/assets/images/scientific-calculator.png" style="opacity: .25; filter: saturate(0);" class="drop-shadow-lg" alt="Casio FX-61F Vědecká kalkulačka">
        <img src="/assets/images/fingers.jpg" class="r-frame drop-shadow-lg" alt="Dlaň">
    </div>

    <aside class="notes">
        a bude pravděpodobně lehčí počítat na prstech.
    </aside>
</section>