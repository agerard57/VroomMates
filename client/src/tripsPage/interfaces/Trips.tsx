export interface Trip {
  _id: string;
  departure: {
    place_name: string;
    time: Date;
  };
  arrival: {
    place_name: string;
    time: Date;
  };
  price_per_seat: { total: number };
  day_of_week: number[];
  type: string;
  frequent_trip_options: {
    day_of_week: number[];
    start_date: Date;
    end_date: Date;
  };
  status: string;
  driver: string;
}

export interface Trips {
  tripsCreated: Trip[];
  currentTrips: Trip[];
  pastTrips: Trip[];
}

export const TripInitializer = {
  _id: "",
  departure: {
    place_name: "",
    time: new Date("2000-01-01T00:00:00Z"),
  },
  arrival: {
    place_name: "",
    time: new Date("2000-01-01T00:00:00Z"),
  },
  price_per_seat: {
    total: 0,
  },
  day_of_week: [],
  type: "single",
  frequent_trip_options: {
    day_of_week: [],
    start_date: new Date("2000-01-01T00:00:00Z"),
    end_date: new Date("2000-01-01T00:00:00Z"),
  },
  status: "",
  driver: "",
};

export const TripsInitializer = {
  tripsCreated: [TripInitializer],
  currentTrips: [TripInitializer],
  pastTrips: [TripInitializer],
};
