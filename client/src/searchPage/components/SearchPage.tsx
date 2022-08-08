/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import { Trip, TripInitializer } from "../interfaces";
import { getSearchResults } from "../services";
import { TripCard } from "./tripCard";

export const SearchPage: FC = () => {
  const [searchParams] = useSearchParams();
  const [trips, setTrips] = useState<[Trip]>([TripInitializer]);
  useEffect(() => {
    const type = searchParams.get("type");
    const departureLocation = searchParams.get("departureLocation");
    const arrivalLocation = searchParams.get("arrivalLocation");
    const date = searchParams.get("date");
    getSearchResults({
      type,
      departureLocation,
      arrivalLocation,
      date,
    }).then((trips) => {
      setTrips(trips);
    });
  }, [searchParams]);
  return (
    <Container
      css={css`
        padding: 5vw;
      `}
    >
      {trips.map((trip) => (
        <TripCard key={trip._id} trip={trip} />
      ))}
    </Container>
  );
};
