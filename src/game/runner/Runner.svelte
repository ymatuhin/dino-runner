<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import { template } from "./template";
  import { Runner } from "./runner";

  const dispatch = createEventDispatcher();

  let container;
  export let highestScore: number;
  export let inGame = false;
  export let darkMode: boolean;
  export let inverted = false;
  export let settings = {
    position: "default",
    disableSound: true,
    disableSunset: true,
  };

  $: invertClass = darkMode && !inverted ? "filter-invert" : "";

  onMount(() => {
    const runner = new Runner(container);
    const { isDarkMode, invert: runnerInvert, playSound, restart, gameOver } = runner;
    runner.isDarkMode = () => {
      if (typeof darkMode === "boolean") return darkMode;
      return isDarkMode.call(runner);
    };
    runner.beforeIntro = () => {
      if (highestScore) runner.initializeHighScore(highestScore);
      inGame = true;
    };
    runner.gameOver = (...args) => {
      inGame = false;
      gameOver.call(runner, ...args);
      dispatch("gameOver", {
        time: Math.ceil(runner.runningTime),
        score: Math.ceil(runner.distanceRan),
        displayScore: Math.ceil(runner.distanceMeter.getActualDistance(runner.distanceRan)),
      });
    };
    runner.restart = (...args) => {
      inGame = true;
      return restart.call(runner, ...args);
    };
    runner.invert = (reset) => {
      if (settings.disableSunset) return runnerInvert.call(runner, true);
      inverted = reset ? false : !inverted;
      return runnerInvert.call(runner, reset);
    };
    runner.playSound = (...args) => {
      if (settings.disableSound) return;
      return playSound.call(runner, ...args);
    };
  });
</script>

<div class="wrapper / motion-safe:transition-filter {invertClass}" bind:this={container} />
{@html template}

<style>
  .wrapper :global(.runner-container) {
    width: 44px;
    overflow: hidden;
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }
</style>
