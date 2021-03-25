<script lang="ts">
  import { ServerAlert } from "shared";
  import { darkMode } from "shared/ui/features";
  import { Runner } from "./runner";
  import Overlay from "./Overlay.svelte";
  import Settings from "./Settings.svelte";
  import RunnerContainer from "./RunnerContainer.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import { inGame, inverted, settings, highestScore, scores, nick } from "./model";
  import { loadScores, gameOver, scoresGetApi, scoresPostApi } from "./model";

  loadScores();

  $: isLoading = $scoresGetApi.status === "pending" || $scoresPostApi.status === "pending";
</script>

<RunnerContainer class="space-section" inGame={$inGame} settings={$settings}>
  <Runner
    bind:inGame={$inGame}
    bind:inverted={$inverted}
    settings={$settings}
    highestScore={$highestScore}
    darkMode={$darkMode}
    on:gameOver={gameOver}
  />
</RunnerContainer>
<Overlay showed={$inGame} inverted={$inverted} />
<ServerAlert class="mt-4" apiStore={scoresPostApi} />

<h2 class="mb-3 typo-overline space-section">Настройки</h2>
<Settings bind:settings={$settings} bind:nick={$nick} inGame={$inGame} />

<h2 class="mb-4 typo-overline space-section">Лучшие результаты</h2>

<ServerAlert apiStore={scoresGetApi} />
{#if $scoresGetApi.status !== "error"}
  <ScoreBoard nick={$nick} scores={$scores} {isLoading} />
{/if}
