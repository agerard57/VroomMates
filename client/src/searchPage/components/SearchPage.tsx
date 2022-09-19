/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";

import { ColoredBackground, SearchBox } from "../../core";
import { useSearchPage } from "../hooks";
import { EmptyCard } from "./EmptyCard";
import { TripCard } from "./tripCard";

export const SearchPage: FC = () => {
  const { trips } = useSearchPage();

  return (
    <ColoredBackground
      outsideStyling={css`
        align-items: flex-start;
      `}
    >
      <Container>
        <SearchBox canClose={true} />
        <span>
          {trips.length > 0 ? (
            trips.map((trip) => <TripCard key={trip._id} trip={trip} />)
          ) : (
            <EmptyCard />
          )}
        </span>
      </Container>
    </ColoredBackground>
  );
};
