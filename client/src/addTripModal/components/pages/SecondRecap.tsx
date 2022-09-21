/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { RegisterImage } from "../../../core";

export const SecondRecap: FC = () => {
  const { t } = useTranslation("AddTripModal");

  return (
    <Container
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <Row>
        <img
          src={RegisterImage}
          alt="register pic"
          css={css`
            width: 60vw;
            margin-left: auto;
            margin-right: auto;
            display: block;
            padding-bottom: 1rem;
          `}
        />
        <h1
          css={css`
            font-weight: 700;
            color: #3d3d3d;
          `}
        >
          {t("page.1.title")}
        </h1>
      </Row>
      <Row
        css={css`
          display: flex;
        `}
      >
        <p
          css={css`
            color: #636363;
            padding-top: 1rem;
            text-align: justify;
          `}
        >
          {t("page.1.body")}
        </p>
      </Row>
    </Container>
  );
};
