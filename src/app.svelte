<script lang="ts">
  let count = 0;
  let titleIcon = process.env.NODE_ENV === "development" ? "🚧" : "";

  function handleClick() {
    count += 1;
  }
</script>

<svelte:head>
  <title>{titleIcon} Custom title</title>
</svelte:head>

<div class="container max-w-2xl mx-auto px-3 md:px-5">
  <h1 class="text-5xl mt-6 sm:mt-12 md:mt-24">Demo</h1>

  <button class="text-base" on:click={handleClick}>
    Clicked {count}
    {count === 1 ? "time" : "times"}
  </button>
</div>
