import { TFunction } from "i18next";
import React from "react";

import { i18n } from "../../i18n";
import { isLanguageCode } from "../helpers";
import { LanguageCode } from "../types";

export function useLanguage(): {
  language: LanguageCode;
  change: () => Promise<TFunction>;
} {
  if (!isLanguageCode(i18n.language))
    throw new Error(`Unknown language code: ${i18n.language}`);

  const [language, setLang] = React.useState<LanguageCode>(i18n.language);
  const change = () => i18n.changeLanguage(language === "fr" ? "en" : "fr");

  i18n.on("languageChanged", (newLanguage: string) => {
    if (!isLanguageCode(newLanguage))
      throw new Error(`Unknown language code: ${newLanguage}`);
    setLang(newLanguage);
  });

  return { language, change };
}
