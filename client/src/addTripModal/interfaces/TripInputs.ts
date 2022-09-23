import { TripTypes } from "../../core";

export interface Location {
  type: "Point";
  coordinates: [number, number];
}

interface FrequentTrips {
  day_of_week: number[];
  start_date: string;
  end_date: string;
}

export interface TripInputs {
  type: TripTypes["Type"];
  departure: {
    location: Location;
    place_name: string;
    time: string;
  };
  arrival: {
    place_name: string;
    location: Location;
    time: string;
  };
  frequent_trip_options: FrequentTrips;
  price_per_seat: {
    driver_fee: number;
    service_fee: number;
    total: number;
  };
  free_seats: number;
  distance: number;
  trip_duration: number;
}

export const locationInitializer = {
  type: "Point" as "Point",
  coordinates: [0, 0] as [number, number],
};

export const tripInputsInitializer: TripInputs = {
  type: "single" as TripTypes["Type"],
  departure: {
    place_name: "",
    location: locationInitializer,
    time: "",
  },
  arrival: {
    place_name: "",
    location: locationInitializer,
    time: "",
  },
  frequent_trip_options: {
    day_of_week: [],
    start_date: "",
    end_date: "",
  },
  price_per_seat: {
    driver_fee: 0,
    service_fee: 0,
    total: 0,
  },
  free_seats: 1,
  distance: 0,
  trip_duration: 0,
};
