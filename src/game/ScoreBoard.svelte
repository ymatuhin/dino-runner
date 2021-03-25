<script lang="ts">
  import ScoreTable from "./ScoreTable.svelte";

  export let scores = { daily: [], weekly: [], monthly: [] };
  export let nick: string;
  export let isLoading: boolean;

  let titles = {
    daily: "За сутки",
    weekly: "За неделю",
    monthly: "За месяц",
  };
</script>

<div class="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
  {#each Object.keys(scores) as typeName}
    <ScoreTable {isLoading} {nick} title={titles[typeName]} scores={scores[typeName]} />
  {/each}
</div>
