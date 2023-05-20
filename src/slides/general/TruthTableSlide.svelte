<script>
    import TruthTable from "../../lib/TruthTable.svelte";

    export let gateName;
    export let type = "dual";
    export let truthFunction;

    export let notes = "";
</script>

<section data-auto-animate>
    <div data-id="truthTable">
        <TruthTable type={type} truthFunction={truthFunction}/>
    </div>

    <aside class="notes">
        {notes}
    </aside>
</section>

<section data-auto-animate>
    <h2>{gateName}</h2>

    <div data-id="truthTable">
        <TruthTable type={type} truthFunction={truthFunction}/>
    </div>

    <aside class="notes">
        {notes}
    </aside>
</section>