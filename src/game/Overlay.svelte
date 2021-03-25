<script lang="ts">
  export let inverted: boolean;
  export let showed: boolean;

  $: overlayBg = inverted ? "bg-gray-900 dark:bg-gray-50" : "bg-gray-50 dark:bg-gray-900";
  $: showedClass = showed ? "z-40 pointer-events-auto" : "opacity-0 -z-10 pointer-events-none";
</script>

<div
  class="transition-all duration-300 motion-reduce:transition-none fixed inset-0 {overlayBg} {showedClass}"
/>
