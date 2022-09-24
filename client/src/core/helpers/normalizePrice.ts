import { LanguageCode } from "../../language";

type NormalizePrice = (price: number | string, lng: LanguageCode) => string;

export const normalizePrice: NormalizePrice = (price, lng) =>
  // If lang === "fr", return the price in €, otherwise return the price in $ TODO CONVERT
  lng === "en" ? `$${price}` : `${price}€`;
