<script lang="ts">
  import { onDestroy } from "svelte";
  import { onResize } from "shared/utils";

  let container;
  let transform = "";
  let className = "";
  export { className as class };

  export let inGame = false;
  export let settings = {
    position: "default",
    disableSound: true,
    disableSunset: true,
  };

  const getTranslate = () => {
    const translateX = (window.innerWidth - container.clientWidth) / 2 - container.offsetLeft;
    const translateY =
      (window.innerHeight - container.clientHeight) / 2 - container.offsetTop + window.scrollY;
    return `translate(${translateX}px, ${translateY}px)`;
  };

  const getScale = () => {
    const windowHeight = window.innerHeight;
    const scaleWidth = window.innerWidth / container.clientWidth;
    const scaleHeight = windowHeight / container.clientHeight;
    const scale = Math.max(1, Math.min(scaleHeight, scaleWidth));
    return `scale(${scale})`;
  };

  function syncTransform(inGame, position) {
    if (!container) return;
    if (position === "center" && inGame) {
      transform = getTranslate();
    } else if (position === "full" && inGame) {
      transform = `${getTranslate()} ${getScale()}`;
    } else {
      transform = "";
    }
  }

  $: document.documentElement.style.overflow = inGame ? "hidden" : "";
  $: syncTransform(inGame, settings.position);
  let resizeListener = onResize(() => syncTransform(inGame, settings.position));
  onDestroy(resizeListener);
</script>

<div
  class="runner-container {className} relative z-50 origin-center max-w-full transition-transform duration-300 motion-reduce:transition-none"
  bind:this={container}
  style="transform: {transform}"
>
  <slot />
</div>

<style>
  .runner-container {
    width: 600px;
    height: 150px;
  }
</style>
