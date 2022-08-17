/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { RoundedContour } from "../../../core";
import { Trip } from "../../interfaces";
import { ButtonsSection } from "./ButtonsSection";
import { DateSection } from "./DateSection";
import { DaysSection } from "./DaysSection";
import { DriverSection } from "./DriverSection";
import { MapSection } from "./MapSection";
import { PassengersSection } from "./PassengersSection";
import { TripInfosSection } from "./TripInfosSection";

type Props = {
  trip: Trip;
};

export const DetailsCard: FC<Props> = ({ trip }) => {
  return (
    <RoundedContour
      outsideStyling={css`
        display: flow-root;
        padding: 0;
        overflow: hidden;
        position: relative;
        flex-wrap: nowrap;
        .row {
          padding: 10px;
          justify-content: center;
        }
      `}
    >
      <DaysSection
        type={trip.type}
        daysOfWeek={trip.frequent_trip_options.day_of_week}
      />
      <DateSection
        type={trip.type}
        singleTrip={trip.departure.time}
        frequentTrip={{
          startDate: trip.frequent_trip_options.start_date,
          endDate: trip.frequent_trip_options.end_date,
        }}
      />
      <MapSection
        tripCoordinates={{
          departure: [
            parseFloat(trip.departure.location.coordinates[1].$numberDecimal),
            parseFloat(trip.departure.location.coordinates[0].$numberDecimal),
          ],
          arrival: [
            parseFloat(trip.arrival.location.coordinates[1].$numberDecimal),
            parseFloat(trip.arrival.location.coordinates[0].$numberDecimal),
          ],
        }}
      />
      <TripInfosSection
        departure={{
          time: trip.departure.time,
          placeName: trip.departure.place_name,
          coordinates: [
            trip.departure.location.coordinates[1].$numberDecimal,
            trip.departure.location.coordinates[0].$numberDecimal,
          ],
        }}
        arrival={{
          time: trip.arrival.time,
          placeName: trip.arrival.place_name,
          coordinates: [
            trip.arrival.location.coordinates[1].$numberDecimal,
            trip.arrival.location.coordinates[0].$numberDecimal,
          ],
        }}
      />
      <DriverSection
        tripId={trip._id}
        driver={trip.driver}
        car={trip.driver.car}
      />
      <PassengersSection passengers={trip.passengers} />
      <hr
        css={css`
          width: 12rem;
          margin: 0.5rem auto;
          border: 1px solid;
        `}
      />
      <ButtonsSection />
    </RoundedContour>
  );
};
