import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { resources } from "./resources";

const lng = ["fr", "en"];
i18n
  .use(new LanguageDetector())
  .use(initReactI18next)
  .init({
    debug: true,
    detection: { order: ["querystring"], lookupQuerystring: "lng" },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    preload: lng,
    react: {
      bindI18n: "languageChanged",
    },
    resources,
    returnObjects: true,
    supportedLngs: lng,
  });

export { i18n };
