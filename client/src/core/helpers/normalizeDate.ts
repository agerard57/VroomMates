import { LanguageCode } from "../../language";

type NormalizeDate = (
  date: Date,
  lng: LanguageCode,
  dateFormat: "date" | "time"
) => string;

export const normalizeDate: NormalizeDate = (date, lng, dateFormat) => {
  const langFormat = lng === "en" ? "en-US" : "fr-FR";
  switch (dateFormat) {
    case "date":
      //Converts ISO date into a human readable date.
      const readableDate = new Date(date).toLocaleDateString(langFormat, {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      // Every first letter of each word are capitalized
      return (
        readableDate
          .replace(/\w\S*/g, (readableDate) => {
            return (
              readableDate.charAt(0).toUpperCase() +
              readableDate.substr(1).toLowerCase()
            );
          })
          //Replace all , with a space
          .replace(",", ".")
          .replace(",", " ")
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
