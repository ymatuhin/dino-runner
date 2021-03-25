<script lang="ts">
  import type { Locale } from "./i18n";

  import { Route, router } from "tinro";
  import { TransProvider } from "shared/i18n";
  import { i18n } from "./i18n";
  import Home from "./Home.svelte";

  $: locale = ($router.path === "/ru" ? "ru" : "en") as Locale;
  $: i18n.changeLocale(locale);

  router.subscribe((_) => window.scrollTo(0, 0));
</script>

<TransProvider i18n={$i18n}>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/ru">
    <Home />
  </Route>
</TransProvider>
