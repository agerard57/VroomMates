interface Location {
  _id: string;
  type: string;
  coordinates: number[];
}

interface Driver {
  name: {
    first_name: string;
  };
  email: { confirmed: boolean };
  photo_url: string;
}

export interface Trip {
  _id: string;
  departure: {
    location: Location;
    time: Date;
  };
  arrival: {
    location: Location;
    time: Date;
  };
  price_per_seat: {
    total: number;
  };
  day_of_week: string[];
  type: string;
  free_seats: number;
  trip_duration: number;
  distance: number;
  status: string;
  driver: Driver;
}

const LocationInitializer = {
  _id: "",
  type: "",
  coordinates: [],
};

const DriverInitializer = {
  name: {
    first_name: "",
  },
  email: { confirmed: false },
  photo_url: "",
};

export const TripInitializer = {
  _id: "",
  departure: {
    location: LocationInitializer,
    time: new Date("2000-01-01T00:00:00Z"),
  },
  arrival: {
    location: LocationInitializer,
    time: new Date("2000-01-01T00:00:00Z"),
  },
  price_per_seat: {
    total: 0,
  },
  day_of_week: [],
  type: "",
  free_seats: 0,
  trip_duration: 0,
  distance: 0,
  status: "",
  driver: DriverInitializer,
};
