/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";

import { ColoredBackground } from "../../core";
import { useDetailsCard } from "../hooks";
import { DetailsCard } from "./detailsCard";

export const TripDetailsPage: FC = () => {
  const { trip } = useDetailsCard();

  return (
    <ColoredBackground>
      <Container
        css={css`
          padding: 0 7vw;
        `}
      >
        <DetailsCard trip={trip} />
      </Container>
    </ColoredBackground>
  );
};
