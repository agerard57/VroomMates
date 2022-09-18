/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { BioSection } from "./BioSection";
import { HobbiesSection } from "./HobbiesSection";
import { QAndASection } from "./QAndASection";

export const ThirdAbout: FC = () => {
  const { t } = useTranslation("RegisterCompleteModal");

  return (
    <Container
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
      `}
    >
      <Row>
        <h1
          css={css`
            font-weight: 700;
            color: #3d3d3d;
          `}
        >
          {t("page.2.title")}
        </h1>
        <p
          css={css`
            color: #636363;
            padding-top: 1rem;
            text-align: center;
          `}
        >
          {t("page.2.body")}
        </p>
      </Row>
      <Row>
        <form
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: space-between;

            .row {
              display: flex;
              align-items: center;
            }
          `}
        >
          <BioSection />
          <QAndASection />
          <HobbiesSection />
        </form>
      </Row>
    </Container>
  );
};
