/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import { TripArrow } from "../../assets";
import { useTripInfosSection } from "../../hooks";
import { TripInfosProps } from "../../types";

type DistanceProp = {
  distance: number;
};

export const TripInfosSection: FC<TripInfosProps & DistanceProp> = ({
  distance,
  departure,
  arrival,
}) => {
  const { distanceFromUser, totalDistance, time, placeName } =
    useTripInfosSection({ departure, arrival, distance });

  return (
    <Row
      css={css`
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        color: #333333;
        font-weight: 600;
        white-space: nowrap;
      `}
    >
      <Col
        css={css`
          p {
            margin: 0.7rem 0;
          }
        `}
      >
        <Row>
          <p>{time.departure}</p>
        </Row>
        <Row>
          <p>{time.arrival}</p>
        </Row>
      </Col>
      <Col
        css={css`
          margin: -1.6rem;
        `}
      >
        <TripArrow />
      </Col>
      <Col
        css={css`
          text-align: left;
          p {
            margin: 0;
          }
          span {
            color: #367fef;
            font-size: 0.8rem;
            font-weight: 500;
            flex-self: flex-start;
          }
        `}
      >
        <Row>
          {distanceFromUser !== undefined ? (
            <span>{distanceFromUser}</span>
          ) : null}
          <p>{placeName.departure}</p>
        </Row>
        <hr
          css={css`
            margin: 0.2rem;
          `}
        />
        <Row>
          <p>{placeName.arrival}</p>
          <span>{totalDistance}</span>
        </Row>
      </Col>
    </Row>
  );
};
