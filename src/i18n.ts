import { createI18n } from "shared/i18n";
import translationEn from "./translations/en.json";

export type Locale = "en" | "ru";

export const i18n = createI18n<Locale>({
  locale: "en",
  translation: translationEn,
});

i18n.addLoadable("ru", () => import("./translations/ru.json"));
