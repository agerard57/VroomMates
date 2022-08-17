interface Location {
  type: string;
  coordinates: { $numberDecimal: string }[];
}

interface Driver {
  first_name: string;
  photo_url: string;
  confirmed_email: boolean;
  avgRating: number;
}

export interface Trip {
  _id: string;
  departure: {
    location: Location;
    place_name: string;
    time: Date;
  };
  arrival: {
    location: Location;
    place_name: string;
    time: Date;
  };
  price_per_seat: { total: { $numberDecimal: string } };
  type: string;
  frequent_trip_options: {
    day_of_week: number[];
    start_date: Date;
    end_date: Date;
  };
  free_seats: number;
  trip_duration: number;
  distance: number;
  status: string;
  driver: Driver;
}

const LocationInitializer = {
  _id: "",
  type: "",
  coordinates: [{ $numberDecimal: "0" }, { $numberDecimal: "0" }],
};

const DriverInitializer = {
  photo_url:
    "https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png", //TODO Use own default avatar
  avgRating: 5,
  first_name: "",
  confirmed_email: false,
};

export const TripInitializer = {
  _id: "",
  departure: {
    location: LocationInitializer,
    place_name: "",
    time: new Date("2000-01-01T00:00:00Z"),
  },
  arrival: {
    location: LocationInitializer,
    place_name: "",
    time: new Date("2000-01-01T00:00:00Z"),
  },
  price_per_seat: {
    total: { $numberDecimal: "0" },
  },
  frequent_trip_options: {
    day_of_week: [],
    start_date: new Date("2000-01-01T00:00:00Z"),
    end_date: new Date("2000-01-01T00:00:00Z"),
  },
  type: "",
  free_seats: 0,
  trip_duration: 0,
  distance: 0,
  status: "",
  driver: DriverInitializer,
};
