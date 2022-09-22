import { useState, useEffect } from "react";

import { TripTypes } from "../../core";
import { priceManager } from "../helpers";
import { MapboxData, mapboxDataInitializer } from "../interfaces";
import { UseFirstAddManager } from "../types";

export const useFirstAdd: UseFirstAddManager = (inputs, setInputs) => {
  const [typeChecked, setTypeChecked] = useState<TripTypes["Type"]>(
    inputs.type
  );

  const [frequentStartDate, setFrequentStartDate] = useState<string>(
    inputs.departure.time.toString().split("T")[0]
  );

  const [frequentStartTime, setFrequentStartTime] = useState<string>(
    inputs.departure.time.toString().split("T")[1]
  );

  const [frequentEndDate, setFrequentEndDate] = useState<string>(
    inputs.arrival.time.toString().split("T")[0]
  );

  const [days, setDays] = useState<number[] | undefined>(
    inputs.frequent_trip_options.day_of_week
  );

  const [mapboxData, setMapboxData] = useState<MapboxData>(
    mapboxDataInitializer
  );

  const [seatsAvailable, setSeatsAvailable] = useState<number>(
    inputs.free_seats
  );

  useEffect(() => {
    const arrivalTime =
      frequentStartDate && frequentStartTime
        ? new Date(
            new Date(frequentStartDate + "T" + frequentStartTime).getTime() +
              mapboxData.route.duration * 1000
          )
        : new Date();

    setInputs({
      type: typeChecked,
      departure: {
        time: `${frequentStartDate}T${frequentStartTime}`,
        location: mapboxData.origin.location,
        place_name: mapboxData.origin.place_name,
      },
      arrival: {
        time: arrivalTime.toISOString(),
        location: mapboxData.destination.location,
        place_name: mapboxData.destination.place_name,
      },
      frequent_trip_options: {
        day_of_week: days,
        start_date: `${frequentStartDate}T${frequentStartTime}`,
        end_date: frequentEndDate,
      },
      price_per_seat: priceManager(mapboxData.route.distance),
      free_seats: seatsAvailable,
    });
  }, [
    frequentEndDate,
    days,
    frequentStartDate,
    frequentStartTime,
    mapboxData,
    seatsAvailable,
    setInputs,
    typeChecked,
  ]);

  return {
    typeSectionProps: { typeChecked, setTypeChecked },
    startFrequentDateSectionProps: {
      setFrequentStartDate,
      setFrequentStartTime,
    },
    endFrequentDateSectionProps: { setFrequentEndDate },
    daysSectionProps: { days, setDays },
    mapSectionProps: { setMapboxData },
    seatsSectionProps: { seatsAvailable, setSeatsAvailable },
  };
};
