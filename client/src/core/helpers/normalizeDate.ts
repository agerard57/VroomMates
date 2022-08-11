import { LanguageCode } from "../../language";

type NormalizeDate = (
  date: Date,
  lng: LanguageCode,
  dateFormat: "shortDate" | "longDate" | "time"
) => string;

export const normalizeDate: NormalizeDate = (date, lng, dateFormat) => {
  const langFormat = lng === "en" ? "en-US" : "fr-FR";
  switch (dateFormat) {
    case "shortDate":
      //Converts ISO date into a human readable date.
      const readableShortDate = new Date(date).toLocaleDateString(langFormat, {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      // Every first letter of each word are capitalized
      return (
        readableShortDate
          .replace(/\w\S*/g, (readableShortDate) => {
            return (
              readableShortDate.charAt(0).toUpperCase() +
              readableShortDate.substr(1).toLowerCase()
            );
          })
          //Replace all , with a space
          .replace(",", ".")
          .replace(",", " ")
      );
    case "longDate":
      //Converts ISO date into a human readable date.
      const readableLongDate = new Date(date).toLocaleDateString(langFormat, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      // Every first letter of each word are capitalized
      return (
        readableLongDate
          .replace(/\w\S*/g, (readableLongDate) => {
            return (
              readableLongDate.charAt(0).toUpperCase() +
              readableLongDate.substr(1).toLowerCase()
            );
          })
          //Replace all , with a space
          .replace(/,/g, " ")
      );

    case "time":
      //Converts ISO date into a human readable time.
      const readableTime = new Date(date).toLocaleTimeString(langFormat, {
        hour: "numeric",
        minute: "2-digit",
      });
      return readableTime;
    default:
      return dateFormat;
  }
};