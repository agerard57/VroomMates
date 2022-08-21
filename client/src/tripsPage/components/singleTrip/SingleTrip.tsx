/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import { Trip } from "../../interfaces";
import { CenterSection } from "./CenterSection";
import { DateSection } from "./DateSection";
import { DaysSection } from "./DaysSection";
import { DriverSection } from "./DriverSection";
import { PriceSection } from "./PriceSection";
import { SideArrow } from "./SideArrow";

type Props = {
  trip: Trip;
};

export const SingleTrip: FC<Props> = ({ trip }) => (
  <div
    css={css`
      display: flex;
      align-items: stretch;
      padding: 10px;
      justify-content: space-between;
    `}
    onClick={() => {
      window.location.href = `/trip/${trip._id}`;
    }}
  >
    <Col xs={10}>
      <DateSection
        departureDate={trip.departure.time}
        frequent={{
          from: trip.frequent_trip_options?.start_date,
          to: trip.frequent_trip_options?.end_date,
        }}
      />
      <CenterSection departure={trip.departure} arrival={trip.arrival} />
      <Row
        css={css`
          align-items: center;
        `}
      >
        <DriverSection driver={trip.driver} />
        <PriceSection />
      </Row>
      {trip.frequent_trip_options ? (
        <DaysSection dayOfWeek={trip.frequent_trip_options.day_of_week} />
      ) : null}
    </Col>
    <SideArrow />
  </div>
);
