<script>
    import { _ } from 'svelte-i18n';
    
    export let type = "dual";
    export let truthFunction;
</script>

<style>
    table {
        border: 0.2vw gray solid;
    }
    
    td {
        text-align: center !important;
        vertical-align: middle !important;
        font-family: IBMPlexMono;
    }

    .true {
        color: green;
        border-color: inherit;
    }

    .false {
        color: red;
        border-color: inherit;
    }
</style>

{#if type == "dual"}
    <table>
        <tr>
            <th>A</th><th>B</th><th>{$_("truthTableOutput")}</th>
        </tr>
        <tr>
            <td class="false">0</td> <td class="false">0</td> <td class={String(truthFunction(false, false))}>{Number(truthFunction(false, false))}</td>
        </tr>
        <tr>
            <td class="false">0</td> <td class="true">1</td> <td class={String(truthFunction(false, true))}>{Number(truthFunction(false, true))}</td>
        </tr>
        <tr>
            <td class="true">1</td> <td class="false">0</td> <td class={String(truthFunction(true, false))}>{Number(truthFunction(true, false))}</td>
        </tr>
        <tr>
            <td class="true">1</td> <td class="true">1</td> <td class={String(truthFunction(true, true))}>{Number(truthFunction(true, true))}</td>
        </tr>
    </table>
{/if}

{#if type == "single"}
    <table>
        <tr>
            <th>A</th><th>{$_("truthTableOutput")}</th>
        </tr>
        <tr>
            <td class="false">0</td> <td class={String(truthFunction(false))}>{Number(truthFunction(false))}</td>
        </tr>
        <tr>
            <td class="true">1</td> <td class={String(truthFunction(true))}>{Number(truthFunction(true))}</td>
        </tr>
    </table>
{/if}