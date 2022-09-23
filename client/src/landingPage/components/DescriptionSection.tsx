/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { HomeImage2 } from "../assets";

export const DescriptionSection: FC = () => {
  const { t } = useTranslation("LandingPage");

  return (
    <section>
      <Container
        css={css`
          padding: 2rem;
        `}
      >
        <Row
          css={css`
            padding-bottom: 2rem;
          `}
        >
          <Col>
            <h3
              css={css`
                white-space: pre-wrap;
                font-size: 1.2rem;
              `}
            >
              {t("descriptionSection.title")}
            </h3>
          </Col>
          <Col>
            <img
              src={HomeImage2}
              alt="home-2"
              css={css`
                width: 100%;
              `}
            />
          </Col>
        </Row>
        <span
          css={css`
            display: table;
            text-align: justify;
            font-family: "Baloo2";
            font-weight: 400;
          `}
        >
          {t("descriptionSection.description")}
        </span>
      </Container>
    </section>
  );
};
