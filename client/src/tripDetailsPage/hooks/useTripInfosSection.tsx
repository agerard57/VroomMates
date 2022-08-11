import { useTranslation } from "react-i18next";

import {
  useGeolocation,
  normalizeDistance,
  normalizeDate,
  normalizePlaceName,
} from "../../core";
import { useLanguage } from "../../language";
import { TripInfosProps } from "../types";

type TripInfosSectionManager = (tripCoordinates: TripInfosProps) => {
  distanceFromUser: string | undefined;
  totalDistance: string;
  time: { departure: string; arrival: string };
  placeName: { departure: string; arrival: string };
};

export const useTripInfosSection: TripInfosSectionManager = ({
  departure,
  arrival,
}) => {
  const { t } = useTranslation("TripDetailsPage");
  const { language } = useLanguage();
  const { coordinates } = useGeolocation();

  const distanceFromUser = t("tripInfosSection.distanceFromUser", {
    position: coordinates.length
      ? normalizeDistance(
          {
            latitude: coordinates[0].toString(),
            longitude: coordinates[1].toString(),
          },
          {
            latitude: departure.coordinates[1],
            longitude: departure.coordinates[0],
          },
          language
        )
      : undefined,
  });

  const totalDistance = t("tripInfosSection.totalDistance", {
    distance: normalizeDistance(
      {
        latitude: departure.coordinates[1],
        longitude: departure.coordinates[0],
      },
      {
        latitude: arrival.coordinates[1],
        longitude: arrival.coordinates[0],
      },
      language
    ),
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
