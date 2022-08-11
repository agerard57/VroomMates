import { getDistance } from "geolib";

import { LanguageCode } from "../../language";

type NormalizeDistance = (
  departureCoordinates: { latitude: string; longitude: string },
  arrivalCoordinates: { latitude: string; longitude: string },
  lang: LanguageCode,
  accuracy?: number
) => string;

export const normalizeDistance: NormalizeDistance = (
  departureCoordinates,
  arrivalCoordinates,
  lang,
  accuracy = 10
) => {
  const distance = getDistance(
    {
      latitude: departureCoordinates.latitude,
      longitude: departureCoordinates.longitude,
    },
    {
      latitude: arrivalCoordinates.latitude,
      longitude: arrivalCoordinates.longitude,
    }
  );
  const distanceInKm = distance / 1000;
  const distanceInM = distance;
  const distanceInMi = distance / 1609.34;
  const distanceInMiRound = Math.round(distanceInMi * accuracy) / accuracy;
  const distanceInKmRound = Math.round(distanceInKm * accuracy) / accuracy;
  const distanceInMRound = Math.round(distanceInM * accuracy) / accuracy;

  if (lang === "fr") {
    if (distanceInKmRound < 1) {
      return `${distanceInMRound}m`;
    } else {
      return `${distanceInKmRound}km`;
    }
  } else {
    return `${distanceInMiRound}mi`;
  }
};
