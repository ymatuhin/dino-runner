<script lang="ts">
  import { Checkbox, Radio, Field } from "shared/ui";

  export let nick = "unknown";
  export let inGame = false;
  export let settings = {
    position: "default",
    disableSound: true,
    disableSunset: false,
  };
</script>

<div class="flex flex-col flex-wrap md:flex-row">
  <div class="flex-1 mr-12">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="block mb-2">
      <h3 class="mb-2 typo-sub-title2">Ваш ник</h3>
      <Field class="w-48" bind:value={nick} maxLength={15} />
    </label>

    <Checkbox bind:checked={settings.disableSound}>отключить звук</Checkbox>
    <br />
    <Checkbox bind:checked={settings.disableSunset} disabled={inGame}>
      <p class="pb-1 mt-1 leading-none">отключить смену дня и ночи</p>
      <p class="typo-caption">каждые 700 очков</p>
    </Checkbox>
  </div>
  <div class="flex-1 mt-8 mr-8 md:mt-0">
    <h3 class="mb-2 typo-sub-title2 ">Выравнивание</h3>
    <div class="flex flex-col">
      <Radio class="mb-1" bind:group={settings.position} value="default">по умолчанию</Radio>
      <Radio class="mb-1" bind:group={settings.position} value="center">по центру экрана</Radio>
      <Radio class="mb-1" bind:group={settings.position} value="full">на весь экран</Radio>
    </div>
  </div>
</div>
