/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";

import { ColoredBackground, LoggedUserDataProps } from "../../core";
import { useDetailsCard } from "../hooks";
import { DetailsCard } from "./detailsCard";

type Props = {
  loggedUserData: LoggedUserDataProps["loggedUserData"];
};

export const TripDetailsPage: FC<Props> = ({ loggedUserData }) => {
  const { trip } = useDetailsCard();

  return (
    <ColoredBackground>
      <Container
        css={css`
          padding: 0 7vw;
        `}
      >
        <DetailsCard trip={trip} loggedUserData={loggedUserData} />
      </Container>
    </ColoredBackground>
  );
};
