import { LanguageCode } from "../../language";

type NormalizeDate = (
  date: Date | string,
  lng: LanguageCode,
  dateFormat: "numericDate" | "shortDate" | "longDate" | "time"
) => string;

export const normalizeDate: NormalizeDate = (date, lng, dateFormat) => {
  if (typeof date === "string") date = new Date(date);

  const langFormat = lng === "en" ? "en-US" : "fr-FR";
  switch (dateFormat) {
    case "numericDate":
      return new Date(date).toLocaleDateString(langFormat);
    case "shortDate":
      return (
        new Date(date)
          .toLocaleDateString(langFormat, {
            weekday: "short",
            day: "numeric",
            month: "long",
            year: "numeric",
          })
          .replace(
            /\w\S*/g,
            (readableShortDate) =>
              readableShortDate.charAt(0).toUpperCase() +
              readableShortDate.substr(1).toLowerCase()
          )
          //Replace all , with a space
          .replace(",", ".")
          .replace(",", " ")
      );
    case "longDate":
      return (
        new Date(date)
          .toLocaleDateString(langFormat, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })
          .replace(
            /\w\S*/g,
            (readableLongDate) =>
              readableLongDate.charAt(0).toUpperCase() +
              readableLongDate.substr(1).toLowerCase()
          )
          //Replace all , with a space
          .replace(/,/g, " ")
      );

    case "time":
      return new Date(date).toLocaleTimeString(langFormat, {
        hour: "2-digit",
        minute: "numeric",
      });
    default:
      return dateFormat;
  }
};
