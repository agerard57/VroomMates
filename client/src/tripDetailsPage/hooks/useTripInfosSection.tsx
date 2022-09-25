import { useTranslation } from "react-i18next";

import {
  useGeolocation,
  normalizeDistance,
  normalizeDistanceDifference,
  normalizeDate,
  normalizePlaceName,
} from "../../core";
import { useLanguage } from "../../language";
import { TripInfosProps } from "../types";

type TripInfosSectionManager = (
  tripCoordinates: TripInfosProps & { distance: number }
) => {
  distanceFromUser: string | undefined;
  totalDistance: string;
  time: { departure: string; arrival: string };
  placeName: { departure: string; arrival: string };
};

export const useTripInfosSection: TripInfosSectionManager = ({
  departure,
  arrival,
  distance,
}) => {
  const { t } = useTranslation("TripDetailsPage");
  const { language } = useLanguage();
  const { coordinates } = useGeolocation();
  const distanceFromUser = t("tripInfosSection.distanceFromUser", {
    position:
      coordinates.length === 2
        ? normalizeDistanceDifference(
            [coordinates[1], coordinates[0]],
            departure.coordinates,
            language
          )
        : undefined,
  });

  const totalDistance = t("tripInfosSection.totalDistance", {
    distance: normalizeDistance(distance, language, true),
  });

  const time = {
    departure: normalizeDate(departure.time, language, "time"),
    arrival: normalizeDate(arrival.time, language, "time"),
  };

  const placeName = {
    departure: normalizePlaceName(departure.placeName, "near", language),
    arrival: normalizePlaceName(arrival.placeName, "near", language),
  };
  return { distanceFromUser, totalDistance, time, placeName };
};
