/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";

import { useSearchPage } from "../hooks";
import { TripCard } from "./tripCard";

export const SearchPage: FC = () => {
  const { trips } = useSearchPage();

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
