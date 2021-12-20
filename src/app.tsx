import { LocationProvider, Route, Router } from "preact-iso/router";
import lazy from "preact-iso/lazy";
import { I18nProvider, useI18n, addLocaleRoutes } from "ym/i18n";

const rootLang = "en";
const dictionaries = {
  ru: () => import("./ru.js"),
  en: () => import("./en.js"),
};

// TODO: LazyPage with title/metatags

const routes = addLocaleRoutes({
  rootLang,
  otherLangs: ["ru", "ua", "be"],
  routes: [
    { path: "/about", component: lazy(() => import("./about")) },
    { path: "/", component: lazy(() => import("./home")) },
    { default: true, path: "/404", component: lazy(() => import("./404")) },
  ],
});

export function App() {
  const { onRouteChange, ...rest } = useI18n(rootLang, dictionaries);

  return (
    <LocationProvider>
      <I18nProvider {...rest}>
        <a href="/">Home</a> &nbsp;
        <a href="/about">About</a> &nbsp;
        <a href="/ru">Главная</a> &nbsp;
        <a href="/ru/about">Обо мне</a> &nbsp;
        <hr />
        <Router onRouteChange={onRouteChange}>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Router>
      </I18nProvider>
    </LocationProvider>
  );
}
