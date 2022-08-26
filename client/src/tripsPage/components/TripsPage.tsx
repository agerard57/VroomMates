/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useTripsPage } from "../hooks";
import { Trip } from "../interfaces";
import { Card } from "./Card";

export const TripsPage: FC = () => {
  const { t } = useTranslation("TripsPage");
  const { trips } = useTripsPage(true);

  /* TODO Mapbox doesn't work in prod */
  return (
    <Container
      css={css`
        padding: 5vw;
      `}
    >
      <h1
        css={css`
          font-weight: 700;
          padding: 0 0 3vw 0;
        `}
      >
        {t("title")}
      </h1>
      {Object.entries(trips).map(([key, value]: [string, Trip[]]) => (
        <Card key={key} cardName={key} trips={value} />
      ))}
    </Container>
  );
};
