<script lang="ts">
    export let rowString: string;
    export let rowLength: number;

    export let rowClass = "";
</script>

<style>
    td {
        border: 0 !important;
        font-family: IBMPlexMono;
    }

    .carryRow {
        color: gray;
    }

    .resultRow {
        border-top: 0.1em solid white !important;
    }
</style>

<tr class={rowClass}>
    {#each Array(rowLength - rowString.length) as _, i}
        <td></td>
    {/each}

    {#each rowString.split("") as digit, i}
        <td>{digit}</td>
    {/each}
</tr>