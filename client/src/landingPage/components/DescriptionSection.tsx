/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import HomeImage2 from "../assets/images/home-image-2.png";

export const DescriptionSection: FC = () => {
  const { t } = useTranslation("LandingPage");

  return (
    <section>
      <Container
        css={css`
          padding: 5vw;
        `}
      >
        <Row
          css={css`
            padding: 5vw 0;
          `}
        >
          <Col>
            <h3>{t("descriptionSection.title")}</h3>
          </Col>
          <Col>
            <img
              src={HomeImage2}
              alt="home-image-2"
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
