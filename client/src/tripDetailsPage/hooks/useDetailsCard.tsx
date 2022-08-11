import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Trip, TripInitializer } from "../interfaces";
import { getTrip } from "../services";

export const useDetailsCard = (): { trip: Trip } => {
  const [trip, setTrip] = useState<Trip>(TripInitializer);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getTrip(id).then((trip) => {
        setTrip(trip);
      });
    }
  }, [id]);

  return { trip };
};
