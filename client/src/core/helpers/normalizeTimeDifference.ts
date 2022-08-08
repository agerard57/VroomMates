type NormalizeTimeDifference = (
  departureDate: Date,
  arrivalDate: Date
) => string;

export const normalizeTimeDifference: NormalizeTimeDifference = (
  departureDate,
  arrivalDate
) => {
  // Calculate the difference in milliseconds between the two dates
  // If < 1 hour, display minutes
  // If > 1 hour, display HH:MM
  const difference =
    new Date(arrivalDate).getTime() - new Date(departureDate).getTime();
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  if (hours < 1) {
    return `${minutes}M`;
  } else {
    return `${hours}H${minutes}`;
  }
};
