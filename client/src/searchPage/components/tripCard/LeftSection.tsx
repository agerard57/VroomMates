/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import {
  normalizePlaceName,
  normalizeDate,
  normalizeTime,
  normalizeDistance,
} from "../../../core";
import { useLanguage } from "../../../language";
import { TripArrow } from "../../assets";

type PointProps = {
  time: Date;
  placeName: string;
};

type Props = {
  departure: PointProps;
  arrival: PointProps;
  tripDuration: number;
  distance: number;
};

export const LeftSection: FC<Props> = ({
  departure,
  arrival,
  tripDuration,
  distance,
}) => {
  const { language } = useLanguage();
  return (
    <Col
      css={css`
        margin-right: -1rem;
      `}
    >
      <Row>
        <h2
          css={css`
            color: #367fef;
          `}
        >
          {normalizePlaceName(departure.placeName, "city")}
        </h2>
      </Row>
      <Row
        css={css`
          flex-wrap: nowrap;
          align-items: center;
        `}
      >
        <Col
          css={css`
            margin-right: -4.5rem;
            & > p {
              color: #333333;
              font-weight: 600;
              font-size: 1.2rem;
              margin: 2rem 0;
            }
          `}
        >
          <p>{normalizeDate(departure.time, language, "time")}</p>
          <p>{normalizeDate(arrival.time, language, "time")}</p>
        </Col>
        <Col>
          <TripArrow />
        </Col>
        <Col
          css={css`
            margin-left: -4.5rem;
            white-space: nowrap;
            & > p {
              color: #666666;
              font-weight: 500;
              font-size: 1.2rem;
              margin: 0;
            }
          `}
        >
          <p>- {normalizeTime(tripDuration)}</p>
          <p>- {normalizeDistance(distance, language, true)}</p>
        </Col>
      </Row>
      <Row>
        <h2
          css={css`
            color: #ff8956;
          `}
        >
          {normalizePlaceName(arrival.placeName, "city")}
        </h2>
      </Row>
    </Col>
  );
};
