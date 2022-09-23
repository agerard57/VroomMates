import { LanguageCode } from "../../language";

// If it is an integer, we want to convert it as a string.
// If it is a string, that means it is a float, so we want to round it.
export const normalizeDistance = (
  value: number,
  language: LanguageCode,
  displayUnit = false
): string => {
  //Mile to Kilometer if "fr"
  if (language === "fr") {
    return `${(value * 1.51).toFixed(0)}${displayUnit ? " km." : ""}`;
  } else return `${value.toString()}${displayUnit ? " mi." : ""}`;
};
