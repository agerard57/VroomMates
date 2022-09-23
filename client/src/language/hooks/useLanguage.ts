import { TFunction } from "i18next";
import { useState } from "react";

import { i18n } from "../../i18n";
import { isLanguageCode } from "../helpers";
import { LanguageCode } from "../types";

export function useLanguage(): {
  language: LanguageCode;
  change: (lang: LanguageCode) => Promise<TFunction>;
} {
  if (!isLanguageCode(i18n.language))
    throw new Error(`Unknown language code: ${i18n.language}`);

  const [language, setLang] = useState<LanguageCode>(i18n.language);
  const change = (lang: LanguageCode) => i18n.changeLanguage(lang);

  i18n.on("languageChanged", (newLanguage: string) => {
    if (!isLanguageCode(newLanguage))
      throw new Error(`Unknown language code: ${newLanguage}`);
    setLang(newLanguage);
  });

  return { language, change };
}
