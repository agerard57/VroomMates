/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { generatePath, Link } from "react-router-dom";

import { RoundedContour } from "../../core";
import { Days } from "./Days";

type Props = {
  trip: any;
};

export const TripCard: FC<Props> = ({ trip }) => {
  console.log(trip);
  return (
    <Link
      to={`/trips/${trip._id}`}
      css={css`
        color: black;
        text-decoration: none;
      `}
    >
      <RoundedContour
        outsideStyling={css`
          display: flow-root;
          padding: 0;
          overflow: hidden;
        `}
      >
        <div
          css={css`
            float: right;
            text-align: center;
            border-left: 1px solid #e6e6e6;
            box-shadow: -0.5px 0px 2px rgba(0, 0, 0, 0.25);
            width: 20%;
            display: flex;
            flex-direction: column;
            background-color: white;
            span {
              margin: 0.4rem;
              font-size: 1.2rem;
              font-weight: 600;
            }
          `}
        >
          <Days tripDays={trip.day_of_week} />
        </div>
        <div>
          <h3
            css={css`
              text-align: center;
              border-bottom: 1px solid #e6e6e6;
              padding: 2%;
              font-size: 1.3rem;
              font-weight: 500;
              color: #747474;
            `}
          >
            Sat. 6 August 2022
          </h3>
        </div>
      </RoundedContour>
    </Link>
  );
};
