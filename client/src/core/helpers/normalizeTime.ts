type NormalizeTimeDifference = (duration: number) => string;

export const normalizeTime: NormalizeTimeDifference = (duration) => {
  // Format duration (minutes) to hours and minutes
  // If duration is less than 60 minutes, return minutes
  if (duration < 60) return `${duration} mn.`;

  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}H${minutes}`;
};
