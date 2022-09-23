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
    //Count the number if segments separated by commas
    const segments = placeName.split(",");
    // If there are 3 or less segments, we assume that the first segment is the city name
    const city = segments.length <= 3 ? segments[0] : segments[1];

    switch (format) {
      case "full":
        return placeName.slice(0, placeName.length);
      case "near":
        const near =
          segments.length <= 3
            ? lng === "en"
              ? "in "
              : "dans "
            : lng === "en"
            ? "near "
            : "proche de ";
        return near + segments[0].replace(/\d/g, "");

      case "city":
        return city.charAt(0) === " " ? city.slice(1) : city;

      default:
        return placeName;
    }
  } else {
    return placeName;
  }
};
