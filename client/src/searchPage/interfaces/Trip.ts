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
