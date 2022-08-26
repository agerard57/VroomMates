interface Location {
  type: string;
  coordinates: { $numberDecimal: string }[];
}

export interface Driver {
  id: string;
  first_name: string;
  photo_url: string;
  confirmed_email: boolean;
  avgRating: number;
  nbRatings: number;
  car: {
    brand: string;
    model: string;
    color: string;
  };
}

export interface Passenger {
  first_name: string;
  photo_url: string;
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
  passengers: Passenger[];
  price_per_seat: { total: { $numberDecimal: string } };
  day_of_week: number[];
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
  coordinates: [{ $numberDecimal: "6" }, { $numberDecimal: "49" }],
};

const DriverInitializer = {
  id: "",
  photo_url:
    "https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png", //TODO Use own default avatar
  avgRating: 5,
  nbRatings: 0,
  first_name: "",
  confirmed_email: false,
  car: {
    brand: "",
    model: "",
    color: "",
  },
};

const PassengerInitializer = {
  first_name: "",
  photo_url: "",
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
  day_of_week: [],
  passengers: [PassengerInitializer],
  type: "single",
  frequent_trip_options: {
    day_of_week: [],
    start_date: new Date("2000-01-01T00:00:00Z"),
    end_date: new Date("2000-01-01T00:00:00Z"),
  },
  free_seats: 0,
  trip_duration: 0,
  distance: 0,
  status: "",
  driver: DriverInitializer,
};
