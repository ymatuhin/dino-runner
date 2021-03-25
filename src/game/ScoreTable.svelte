<script lang="ts">
  import { Spinner } from "shared";
  import { defaultNick } from "./model";

  export let scores = [];
  export let title: string;
  export let nick: string;
  export let isLoading: boolean;
</script>

<div class="flex-1">
  <table class="w-full table border-1 border-gray-300 dark:border-gray-600">
    <thead class="bg-gray-200 dark:bg-gray-800 border-b-1 border-gray-300 dark:border-gray-600">
      <tr>
        <td colspan="2" class="text-center typo-caption px-4 py-1.5">
          {title}
        </td>
      </tr>
    </thead>
    <colgroup>
      <col width="100%" />
      <col width="0%" />
    </colgroup>
    {#if isLoading}
      <tr>
        <td colspan="2" class="py-1.5 pl-4 pr-1 text-sm truncate max-w-0 text-center">
          <Spinner class="mx-auto my-2" />
        </td>
      </tr>
    {:else}
      {#each scores as score}
        <tr
          class="even:bg-gray-200 dark:even:bg-gray-800 even:bg-opacity-50 dark:even:bg-opacity-50"
        >
          <td
            class:color-primary-text={score.name === nick && score.name !== defaultNick}
            class="py-1.5 pl-4 pr-1 text-sm truncate max-w-0"
          >
            {score.name}
          </td>
          <td class="py-1.5 pr-4 pl-1 text-sm text-right">{score.score.toLocaleString()}</td>
        </tr>
      {/each}
    {/if}
  </table>
</div>
