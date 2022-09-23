import { getDistance } from "geolib";

import { LanguageCode } from "../../language";

type NormalizeDistanceDifferenceManager = (
  departureCoordinates: [number, number],
  arrivalCoordinates: [number, number],
  lang: LanguageCode,
  accuracy?: number
) => string;

export const normalizeDistanceDifference: NormalizeDistanceDifferenceManager = (
  departureCoordinates,
  arrivalCoordinates,
  lang,
  accuracy = 10
) => {
  const distance = getDistance(
    {
      latitude: departureCoordinates[0],
      longitude: departureCoordinates[1],
    },
    {
      latitude: arrivalCoordinates[0],
      longitude: arrivalCoordinates[1],
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
