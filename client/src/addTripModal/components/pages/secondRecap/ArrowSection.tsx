/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import { normalizeDate, normalizePlaceName } from "../../../../core";
import { useLanguage } from "../../../../language";
import { TripArrow } from "../../../assets";
import { TripInputs } from "../../../interfaces";

type Props = {
  departure: TripInputs["departure"];
  arrival: TripInputs["arrival"];
};

export const ArrowSection: FC<Props> = ({ departure, arrival }) => {
  const { language } = useLanguage();

  return (
    <Row
      css={css`
        margin-top: 1rem;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        padding: 0.5rem 0;
        display: flex;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        justify-content: center;
        align-items: center;
        color: #333333;
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
          <p>{normalizeDate(new Date(departure.time), language, "time")}</p>
        </Row>
        <Row>
          <p>{normalizeDate(new Date(arrival.time), language, "time")}</p>
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
            font-weight: 600;
            white-space: pre-wrap;
          }
        `}
        xs={9}
      >
        <Row>
          <p>{normalizePlaceName(departure.place_name, "full", language)}</p>
        </Row>
        <hr
          css={css`
            margin: 0.2rem;
          `}
        />
        <Row>
          <p>{normalizePlaceName(arrival.place_name, "full", language)}</p>
        </Row>
      </Col>
    </Row>
  );
};
