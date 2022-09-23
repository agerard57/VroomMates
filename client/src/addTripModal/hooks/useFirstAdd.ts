import { useState, useEffect, useRef } from "react";

import { TripInputs, tripInputsInitializer } from "../interfaces";
import { UseFirstAddManager } from "../types";

export const useFirstAdd: UseFirstAddManager = (setTripInputsFilled) => {
  const [inputs, setInputs] = useState<TripInputs>(tripInputsInitializer);

  const componentWillUnmount = useRef<boolean>(false);

  useEffect(() => {
    setTripInputsFilled(() => {
      return inputs.departure.time !== "" &&
        inputs.arrival.time !== "" &&
        inputs.type === "single" &&
        inputs.departure.place_name !== "" &&
        inputs.arrival.place_name !== ""
        ? true
        : inputs.frequent_trip_options.end_date !== ""
        ? true
        : false;
    });
  }, [
    inputs.departure.time,
    inputs.arrival.time,
    inputs.type,
    inputs.frequent_trip_options.end_date,
    inputs.departure.place_name,
    inputs.arrival.place_name,
    setTripInputsFilled,
  ]);

  useEffect(() => {
    return () => {
      componentWillUnmount.current = true;
    };
  }, []);

  useEffect(
    () => localStorage.setItem("tripInputs", JSON.stringify(inputs)),
    [inputs]
  );

  return {
    inputs,
    setInputs,
  };
};
