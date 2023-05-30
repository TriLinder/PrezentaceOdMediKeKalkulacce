<script>
    import { _ } from "svelte-i18n";

    export let carryColumnColor = "transparent";
    export let sumColumnColor = "transparent";
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

<table>
    <tr>
        <th>A</th> <th>B</th> <th style="background-color: {carryColumnColor};">{$_("sumTable.carry")}</th> <th style="background-color: {sumColumnColor};">{$_("sumTable.sum")}</th>
    </tr>
    <tr>
        <td class="false">0</td> <td class="false">0</td> <td class="false" style="background-color: {carryColumnColor};">0</td> <td class="false" style="background-color: {sumColumnColor};">0</td>
    </tr>
    <tr>
        <td class="false">0</td> <td class="true">1</td> <td class="false" style="background-color: {carryColumnColor};">0</td> <td style="background-color: {sumColumnColor};" class="true">1</td>
    </tr>
    <tr>
        <td class="true">1</td> <td class="false">0</td> <td class="false" style="background-color: {carryColumnColor};">0</td> <td style="background-color: {sumColumnColor};" class="true">1</td>
    </tr>
    <tr>
        <td class="true">1</td> <td class="true">1</td> <td class="true" style="background-color: {carryColumnColor};">1</td> <td style="background-color: {sumColumnColor};" class="false">0</td>
    </tr>
</table>