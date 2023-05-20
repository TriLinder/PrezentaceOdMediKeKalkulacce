<script>
    import TruthTableSlide from "../general/TruthTableSlide.svelte";
</script>

<TruthTableSlide gateName="AND" truthFunction={function(A, B) {return A && B}} />