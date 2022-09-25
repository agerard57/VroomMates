/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { CardArrow } from "../../../core";
import { Trip } from "../../interfaces";
import { CenterSection } from "./CenterSection";
import { DateSection } from "./DateSection";
import { DaysSection } from "./DaysSection";
import { DriverSection } from "./DriverSection";
import { PriceSection } from "./PriceSection";

type Props = {
  userId: string | null;
  trip: Trip;
};

export const SingleTrip: FC<Props> = ({ userId, trip }) => {
  const navigate = useNavigate();

  return (
    <div
      className="trip"
      css={css`
        display: flex;
        align-items: stretch;
        padding: 1.5rem;
        justify-content: space-between;
      `}
      onClick={() => navigate(`/trip/${trip._id}`)}
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
          <DriverSection driver={trip.driver} userId={userId} />
          <PriceSection price={trip.price_per_seat.total} />
        </Row>
        {trip.type === "frequent" && trip.frequent_trip_options ? (
          <DaysSection dayOfWeek={trip.frequent_trip_options.day_of_week} />
        ) : null}
      </Col>
      <CardArrow />
    </div>
  );
};
