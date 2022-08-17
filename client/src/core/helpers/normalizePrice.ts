import { LanguageCode } from "../../language";

type NormalizePrice = (price: string, lng: LanguageCode) => string;

export const normalizePrice: NormalizePrice = (price, lng) => {
  // If lang === "fr", return the price in €, otherwise return the price in $ TODO CONVERT
  return lng === "en" ? `$${price}` : `${price}€`;
};
