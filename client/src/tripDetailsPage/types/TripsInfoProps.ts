type LocationProps = {
  time: Date;
  placeName: string;
  coordinates: [string, string];
};

export type TripInfosProps = {
  departure: LocationProps;
  arrival: LocationProps;
};
