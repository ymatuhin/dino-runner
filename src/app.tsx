import { LocationProvider, Route, Router } from "preact-iso/router";
import lazy from "preact-iso/lazy";
import { createLocalRoutes } from "ym/utils/createLocalRoutes";
import { useStore } from "ym/utils/useStore";
import { init as i18nInit, I18nProvider } from "ym/i18n";

const rootLang = "en";
const dictionaries = {
  ru: () => import("./ru.js"),
  en: () => import("./en.js"),
};

const i18n = i18nInit({ rootLang, dictionaries });
const routes = createLocalRoutes({
  rootLang,
  dictionaries,
  routes: [
    { path: "/about", component: lazy(() => import("./about")) },
    { path: "/", component: lazy(() => import("./home")) },
    { default: true, path: "/404", component: lazy(() => import("./404")) },
  ],
});
console.log(`# routes`, routes);
// TODO: LazyPage with title/metatags
// вставить прямо сюда перед роутами

export function App() {
  const dictionary = useStore(i18n.$dictionary);
  const lang = useStore(i18n.$lang);

  return (
    <LocationProvider>
      <I18nProvider lang={lang} dictionary={dictionary}>
        <Router onRouteChange={i18n.onRouteChange}>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Router>
      </I18nProvider>
    </LocationProvider>
  );
}
