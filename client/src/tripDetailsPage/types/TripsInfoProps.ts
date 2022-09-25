type LocationProps = {
  time: Date;
  placeName: string;
  coordinates: [number, number];
};

export type TripInfosProps = {
  departure: LocationProps;
  arrival: LocationProps;
};
