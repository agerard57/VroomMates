import { Location } from "./TripInputs";
import { locationInitializer } from "./TripInputs";

export interface MapboxData {
  origin: {
    place_name: string;
    location: Location;
  };
  destination: {
    place_name: string;
    location: Location;
  };
  route: {
    distance: number;
    duration: number;
  };
}

export const mapboxDataInitializer = {
  origin: {
    place_name: "",
    location: locationInitializer,
  },
  destination: {
    place_name: "",
    location: locationInitializer,
  },
  route: {
    distance: 0,
    duration: 0,
  },
};
