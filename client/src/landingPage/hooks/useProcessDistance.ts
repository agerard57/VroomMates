import { useLanguage } from "../../language";

// If it is an integer, we want to convert it as a string.
// If it is a string, that means it is a float, so we want to round it.
export const useProcessDistance = (
  value: number | string,
  isDistance: boolean
): string => {
  const { language } = useLanguage();

  if (typeof value === "number") {
    //Mile to Kilometer if "fr"
    if (language === "fr" && isDistance) {
      return (value * 1.60934).toFixed(0);
    } else return value.toString();
  }

  // Float to int
  return parseInt(value).toString();
};
