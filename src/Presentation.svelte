<script>
    import { _ } from 'svelte-i18n';

    import Configuration from './slides/configuration/Configuration.svelte';
    import Blank from './slides/general/Blank.svelte';
    import Expectations from './slides/expectations/Expectations.svelte';
    import LogicGatesIntroduction from './slides/logic-gates-introduction/LogicGatesIntroduction.svelte';
    import Counting from './slides/counting/Counting.svelte';
    import Adders from './slides/adders/Adders.svelte';
    import Ending from './slides/ending/Ending.svelte';
</script>

<Configuration/>

<Blank/>

<section>
    <!-- Title slide -->
    <h2>{$_("presentationTitle")}</h2>
    <span>Jakub Hlaváček</span>
</section>

<Expectations/>
<LogicGatesIntroduction/>
<Counting/>
<Adders/>

<Ending/>