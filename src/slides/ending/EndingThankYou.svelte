<script>
    import { _ } from "svelte-i18n";
    import BasicLink from "../../lib/BasicLink.svelte";

    const repositoryLink = "https://github.com/TriLinder/PrezentaceOdMediKeKalkulacce";
</script>

<style>
    .resources {
        text-align: left;
    }
</style>

<section data-auto-animate>
    <h2>{$_("thankYouSlide.thanksForAttention")}</h2>
</section>

<section data-auto-animate data-auto-animate-duration=2>
    <h2>{$_("thankYouSlide.thanksForAttention")}</h2>
    
    <hr>

    <div class="resources">
        <h4>{$_("thankYouSlide.resources")}</h4>

        <ul>
            <li> <BasicLink href={"https://en.wikipedia.org/wiki/Logic_gate"}/> </li>
            <li> <BasicLink href={"https://en.wikipedia.org/wiki/Adder_(electronics)"}/> </li>
            <li> <BasicLink href={"https://en.wikipedia.org/wiki/Vacuum_tube"}/> </li>
            <li> <BasicLink href={"https://en.wikipedia.org/wiki/Z3_(computer)"}/> </li>
            <li> <BasicLink href={"https://en.wikipedia.org/wiki/ENIAC"}/> </li>
            <li> {$_("thankYouSlide.assets")} </li>
        </ul>
    </div>

    <span>{$_("thankYouSlide.thisPresentationIs")} <a href={repositoryLink} target="_blank" rel="noopener noreferrer">{$_("thankYouSlide.openSource")}</a>!</span>
</section>