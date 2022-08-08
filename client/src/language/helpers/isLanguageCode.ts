import { LanguageCode } from "../types";

export const isLanguageCode = (code: string): code is LanguageCode =>
  ["fr", "en"].includes(code);
