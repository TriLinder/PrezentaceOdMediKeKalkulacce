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

    <img src="assets/images/wires.jpg" alt="Electrical wires">

    <aside class="notes">
        Ale i tak si ve skutečnosti ukážeme, jak se dostat z drátů..
    </aside>
</section>

<section data-auto-animate>
    <h2>{$_('expectationsTitle')}</h2>

    <div class="row">
        <img src="assets/images/wires.jpg" style="height: 20rem; opacity: .25; filter: saturate(75%);" alt="Elektrické dráty">
        <img src="assets/images/macbook.jpg" style="height: 30rem;" class="r-frame" alt="Notebook na stole">
    </div>

    <aside class="notes">
        k, byť primitivnímu, ale i tak skutečnému základnímu počítači.
    </aside>
</section>

<section data-auto-animate>
    <h2>{$_('logicalMachinesTitle')}</h2>

    <img src="assets/images/macbook.jpg" style="height: 30rem;" class="r-frame" alt="Notebook na stole">

    <aside class="notes">
        Ale jak je možné z normálních drátů udělat stroj, který umí počítat a zpracovávat informace?
    </aside>
</section>