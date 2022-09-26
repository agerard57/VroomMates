/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useSecondRecap } from "../../../hooks";
import { AdditionalInfosSection } from "./AdditionalInfosSection";
import { ArrowSection } from "./ArrowSection";
import { FrequentDateSection } from "./FrequentDateSection";
import { MapSection } from "./MapSection";
import { SingleDateSection } from "./SingleDateSection";

export const SecondRecap: FC = () => {
  const { t } = useTranslation("AddTripModal");

  const { inputs } = useSecondRecap();

  return (
    <Container
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
      `}
    >
      <Row>
        <h1
          css={css`
            font-weight: 700;
            color: #3d3d3d;
          `}
        >
          {t("title")}
        </h1>
        <p
          css={css`
            color: #636363;
            font-size: 1.1rem;
            text-align: center;
          `}
        >
          {t("page.1.subtitle")}
        </p>
      </Row>
      <MapSection
        departureCoordinates={inputs.departure.location.coordinates}
        arrivalCoordinates={inputs.arrival.location.coordinates}
      />
      {inputs.type === "single" ? (
        <SingleDateSection startDate={inputs.departure.time} />
      ) : (
        <FrequentDateSection
          frequentTripOptions={inputs.frequent_trip_options}
        />
      )}
      <ArrowSection departure={inputs.departure} arrival={inputs.arrival} />
      <AdditionalInfosSection
        freeSeats={inputs.free_seats}
        totalPricePerSeat={inputs.price_per_seat.total}
      />
    </Container>
  );
};
