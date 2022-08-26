/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import { normalizeDate, normalizePlaceName } from "../../../core";
import { useLanguage } from "../../../language";
import TripArrowSrc from "../../assets/tripArrow.svg";
import { Trip } from "../../interfaces";

type Props = {
  departure: Trip["departure"];
  arrival: Trip["arrival"];
};

export const CenterSection: FC<Props> = ({ departure, arrival }) => {
  const { language } = useLanguage();

  return (
    <Row>
      <Col
        xs={4}
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          div {
            padding: 0 10px !important;
          }
        `}
      >
        <Row>{normalizeDate(departure.time, language, "time")}</Row>
        <Row>{normalizeDate(arrival.time, language, "time")}</Row>
      </Col>
      <Col
        xs={1}
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <img src={TripArrowSrc} alt={"arrow"} />
      </Col>
      <Col
        xs={7}
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          font-size: 0.8rem;
          div {
            padding: 0 10px !important;
          }
        `}
      >
        <Row>{normalizePlaceName(departure.place_name, "full")}</Row>
        <Row>{normalizePlaceName(arrival.place_name, "full")}</Row>
      </Col>
    </Row>
  );
};
