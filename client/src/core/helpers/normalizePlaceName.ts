import { LanguageCode } from "../../language";

type NormalizePlaceName = (
  placeName: string,
  format: "full" | "near" | "city",
  lng?: LanguageCode
) => string;

export const normalizePlaceName: NormalizePlaceName = (
  placeName,
  format,
  lng = "en"
) => {
  if (placeName.length > 0) {
    switch (format) {
      case "full":
        return placeName
          .substring(0, placeName.lastIndexOf(","))
          .replace(/\d/g, "")
          .replace("  ", " ");
      case "near":
        const near = lng === "en" ? "near" : "proche de";
        return (
          near +
          placeName
            .substring(0, placeName.lastIndexOf(","))
            .replace(/\d/g, "")
            .replace("  ", " ")
        );
      case "city":
        return placeName
          .split(",")
          [placeName.split(",").length - 2].split(" ")
          .pop()!;
      default:
        return placeName;
    }
  } else {
    return placeName;
  }
};
