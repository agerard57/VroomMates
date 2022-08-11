/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";

import { ColoredBackground } from "../../core";
import { DetailsCard } from "./detailsCard";

export const TripDetailsPage: FC = () => (
  <ColoredBackground>
    <Container
      css={css`
        padding: 0 7vw;
      `}
    >
      <DetailsCard />
    </Container>
  </ColoredBackground>
);
