<script>
    import BasicLink from "../../lib/BasicLink.svelte";
</script>

<style>
    .resources {
        text-align: left;
    }
</style>

<section data-auto-animate>
    <h2>DĚKUJI ZA POZORNOST.</h2>
</section>

<section data-auto-animate data-auto-animate-duration=2>
    <h2>DĚKUJI ZA POZORNOST.</h2>
    
    <hr>

    <div class="resources">
        <h4>Zdroje:</h4>

        <ul>
            <li> <BasicLink href={"https://en.wikipedia.org/wiki/Logic_gate"}/> </li>
            <li> <BasicLink href={"https://en.wikipedia.org/wiki/Adder_(electronics)"}/> </li>
            <li> <BasicLink href={"https://en.wikipedia.org/wiki/Vacuum_tube"}/> </li>
            <li> <BasicLink href={"https://en.wikipedia.org/wiki/Z3_(computer)"}/> </li>
            <li> <BasicLink href={"https://en.wikipedia.org/wiki/ENIAC"}/> </li>
            <li> Zdroje a licence aktiv v příslušných adresářích. </li>
        </ul>
    </div>

    <span>Tato prezentace je <a href="/">open-source</a>!</span>
</section>