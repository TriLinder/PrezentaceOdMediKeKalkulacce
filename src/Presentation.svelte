<script>
    import { _ } from 'svelte-i18n';

    import Configuration from './slides/configuration/Configuration.svelte';
    import Blank from './slides/general/Blank.svelte';
    import H2Slide from './slides/general/H2Slide.svelte';
    import Expectations from './slides/expectations/Expectations.svelte';
    import LogicGatesIntroduction from './slides/logic-gates-introduction/LogicGatesIntroduction.svelte';
    import Counting from './slides/counting/Counting.svelte';
    import Adders from './slides/adders/Adders.svelte';
    import Ending from './slides/ending/Ending.svelte';
</script>

<Configuration/>

<Blank/>
<H2Slide content={$_("presentationTitle")}/>

<Expectations/>
<LogicGatesIntroduction/>
<Counting/>
<Adders/>

<Ending/>