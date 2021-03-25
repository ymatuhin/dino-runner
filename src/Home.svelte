<script lang="ts">
  import { Favicons, Alert, ErrorAlert, WarnAlert, InfoAlert, SuccessAlert } from "shared/ui";
  import { t } from "shared/i18n";
  import { version } from "../package.json";
  import { i18n } from "./i18n";
  import { Game } from "./game";
  import {
    DarkMode,
    BaseLayout,
    Metrica,
    Footer,
    ShareButtons,
    Comments,
  } from "shared/ui/features";
</script>

<a href="/ru">ru</a>
<a href="/">en</a>

<svelte:head>
  <title>{t($i18n, "home.title")}</title>
  <meta name="description" content={t($i18n, "home.description")} />
  <Favicons />
</svelte:head>

<BaseLayout>
  <main class="w-full limit-children">
    <DarkMode class="mb-2" />
    <h2 class="typo-overline">играть онлайн</h2>
    <h1 class="mb-4 typo-h2">Динозавр T-Rex из Google Chrome</h1>

    <Alert class="mb-2" title="Title" message="hello world" />
    <ErrorAlert class="mb-2" title="Error" message="Your email is already used!" />
    <WarnAlert class="mb-2" title="Error" message="Your email is already used!" />
    <InfoAlert class="mb-2" title="Error" message="Your email is already used!" />
    <SuccessAlert class="mb-2" title="Error" message="Your email is already used!" />

    <p class="text-lg">
      Мини игра с прыгающим динозавром первый раз появилась в браузере Google Chrome Canary.
      Страница с игрой открывалась когда у вас прерывалось соединение с интернетом. На странице
      динозавр ничего не делает, просто стоит. Чтобы начать играть, нужно нажать на «пробел».
      Поэтому не все пользователи знают об этой игре.
    </p>

    <Game />
  </main>

  <aside>
    <h2 class="mb-2 typo-overline space-section">Комментарии</h2>
    <Comments />

    <h2 class="mb-2 typo-overline space-section">Поделиться</h2>
    <ShareButtons />

    <Footer
      class="space-section"
      title="Чет/нечет: Какая сейчас учебная неделя"
      from="2015"
      {version}
    />
    <Metrica />
  </aside>
</BaseLayout>

<style lang="postcss">
  .limit-children > * {
    max-width: theme("maxWidth.xl");
  }
</style>
