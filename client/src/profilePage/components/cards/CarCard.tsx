/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { RoundedContour } from "../../../core";
import { CarIcon } from "../../assets";

type Props = {
  brand: string;
  model: string;
  color: string;
};

export const CarCard: FC<Props> = ({ brand, model, color }) => {
  const { t } = useTranslation("ProfilePage");

  return (
    <RoundedContour
      outsideStyling={`
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          overflow: hidden;
          & > *{
            padding: 5%
            }
            `}
    >
      <Col sm={4}>
        <img src={CarIcon} alt="car icon" />
      </Col>
      <Col
        sm={8}
        css={css`
          border-left: 2px solid rgba(0, 0, 0, 0.19);
          text-align: justify;
        `}
      >
        <Row>
          <h2>{t("cards.car")}</h2>
        </Row>
        <Row>
          <span
            css={css`
              font-size: 1.1rem;
              font-weight: 500;
            `}
          >
            {`${brand} ${model}`}
          </span>
        </Row>
        <Row>
          <span
            css={css`
              color: #808080;
              font-size: 0.8rem;
              font-weight: 500;
            `}
          >
            {color}
          </span>
        </Row>
      </Col>
    </RoundedContour>
  );
};
