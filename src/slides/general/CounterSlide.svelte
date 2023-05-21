<script>
    import Counter from "../../lib/Counter/Counter.svelte";

    export let numeralSystemBase = 10;
    export let numberOfDigits = 4;
    export let countInterval = 0;
    export let shouldPlaySound = false; 

    export let notes = "";
</script>

<section>
    <Counter numeralSystemBase={numeralSystemBase} numberOfDigits={numberOfDigits} countInterval={countInterval} shouldPlaySound={shouldPlaySound}/>

    <aside class="notes">
        {notes}
    </aside>
</section>