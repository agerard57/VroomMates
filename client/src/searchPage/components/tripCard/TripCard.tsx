/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { RoundedContour } from "../../../core";
import { Trip } from "../../interfaces";
import { DateSection } from "./DateSection";
import { DaysSection } from "./DaysSection";
import { FullLayout } from "./FullLayout";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";

type Props = {
  trip: Trip;
};

export const TripCard: FC<Props> = ({ trip }) => {
  const isFull = trip.free_seats === 0;
  return (
    <RoundedContour
      outsideStyling={css`
        display: flow-root;
        padding: 0;
        overflow: hidden;
        position: relative;
      `}
    >
      <FullLayout isFull={isFull} />
      <Link
        to={`/trip/${trip._id}`} //TODO PROTECT ROUTE IF ISFULL
        css={css`
          &,
          &:hover {
            color: black;
            text-decoration: none;
            cursor: pointer;
          }
        `}
      >
        <DateSection date={trip.departure.time} />
        <Row
          css={css`
            flex-wrap: nowrap;
            padding: 1rem 0;
          `}
        >
          <LeftSection
            departure={{
              time: trip.departure.time,
              placeName: trip.departure.place_name,
              coordinates: trip.departure.location.coordinates,
            }}
            arrival={{
              time: trip.arrival.time,
              placeName: trip.arrival.place_name,
              coordinates: trip.arrival.location.coordinates,
            }}
          />
          <RightSection
            driver={{
              imgSrc: trip.driver.photo_url,
              firstName: trip.driver.first_name,
              rating: trip.driver.avgRating,
              isVerified: trip.driver.confirmed_email,
            }}
            price={trip.price_per_seat.total}
            isFull={isFull}
          />
        </Row>
        {trip.type === "frequent" ? (
          <DaysSection tripDays={trip.frequent_trip_options.day_of_week} />
        ) : null}
      </Link>
    </RoundedContour>
  );
};
