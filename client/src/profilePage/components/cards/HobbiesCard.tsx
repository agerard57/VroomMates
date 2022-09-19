/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { RoundedContour } from "../../../core";
import { BasketBallIcon } from "../../assets";

type Props = {
  hobbies: string[];
};

export const HobbiesCard: FC<Props> = ({ hobbies }) => {
  const { t } = useTranslation("ProfilePage");

  return (
    <RoundedContour
      outsideStyling={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        overflow: hidden;
        & > * {
          padding: 5%;
        }
      `}
    >
      <Col sm={4}>
        <img src={BasketBallIcon} alt="hobbies icon" />
      </Col>
      <Col
        sm={8}
        css={css`
          border-left: 2px solid rgba(0, 0, 0, 0.19);
          text-align: justify;
        `}
      >
        <Row>
          <h2>{t("cards.hobbies")}</h2>
        </Row>
        <Row
          css={css`
            width: -webkit-fill-available;
          `}
        >
          {hobbies.map((hobby, index) => (
            <span
              css={css`
                padding: 0.5rem 1rem;
                width: auto;
                margin: 5px;
                background-color: #92d1ff;
                color: white;
                border-radius: 50px;
                text-align: center;
              `}
              key={index}
            >
              {hobby}
            </span>
          ))}
        </Row>
      </Col>
    </RoundedContour>
  );
};
