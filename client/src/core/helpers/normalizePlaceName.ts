type NormalizePlaceName = (
  placeName: string,
  format: "full" | "near" | "city"
) => string;

export const normalizePlaceName: NormalizePlaceName = (placeName, format) => {
  if (placeName.length > 0) {
    switch (format) {
      case "full":
        return placeName;
      case "near":
        return (
          "near" +
          placeName
            .split(",")
            .shift()!
            .substr(placeName.indexOf(" ") + 1)
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
