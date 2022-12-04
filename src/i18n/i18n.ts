import i18next, { i18n as i18nInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import { languages } from "./i18n.constants";
import { en, es } from "./i18n.translations";

const createI18n = (language: string): i18nInstance => {
  const i18n = i18next.createInstance().use(initReactI18next);

  i18n.init({
    lng: language,
    fallbackLng: language,
    resources: {
      [languages.en]: en,
      [languages.es]: es,
    },
  });

  return i18n;
};

export const i18n = createI18n(languages.es);