/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { ColoredBackground, usePageTitle } from "../../core";
import { SignInBox } from "./SignInBox";
import { SignUpBox } from "./SignUpBox";

export const SignInPage: FC = () => {
  const { t } = useTranslation("SignInPage");

  usePageTitle("Sign up");

  return (
    <ColoredBackground>
      <Container
        css={css`
          padding: 0 7vw;
        `}
      >
        <Row
          css={css`
            div {
              padding: 0 0 5% 0;
            }
          `}
        >
          <Col xs={8}>
            <SignUpBox />
          </Col>
          <Col
            xs={4}
            css={css`
              display: flex;
              text-align: center;
              align-items: center;
              justify-content: center;
            `}
          >
            <h2
              css={css`
                font-family: "Baloo2";
                font-weight: 1000;
                color: white;
                text-align: center;
                font-size: 4rem;
              `}
            >
              {t("signUpSection.or")}
            </h2>
          </Col>
        </Row>
        <Row>
          <SignInBox />
        </Row>
      </Container>
    </ColoredBackground>
  );
};
