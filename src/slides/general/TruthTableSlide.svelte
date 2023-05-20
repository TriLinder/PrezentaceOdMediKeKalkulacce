<script>
    import TruthTable from "../../lib/TruthTable.svelte";

    export let gateName;
    export let truthFunction;
</script>

<section data-auto-animate>
    <div data-id="truthTable">
        <TruthTable truthFunction={truthFunction}/>
    </div>
</section>

<section data-auto-animate>
    <h2>{gateName}</h2>

    <div data-id="truthTable">
        <TruthTable truthFunction={truthFunction}/>
    </div>
</section>