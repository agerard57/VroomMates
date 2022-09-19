/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { ColoredBackground } from "../../core";
import { SignInBox } from "./SignInBox";
import { SignUpBox } from "./SignUpBox";

export const RegisterPage: FC = () => {
  const { t } = useTranslation("RegisterPage");

  return (
    <ColoredBackground>
      <Container
        css={css`
          padding: 0 8vw;
        `}
      >
        <Row
          css={css`
            div {
              padding: 0 0 5% 0;
            }
          `}
        >
          <Col
            xs={8}
            css={css`
              place-content: center;
            `}
          >
            <SignInBox />
          </Col>
          <Col
            xs={4}
            css={css`
              align-self: center;
            `}
          >
            <h2
              css={css`
                font-family: "Baloo2";
                font-weight: 1000;
                color: white;
                text-align: center;
                font-size: 3rem;
              `}
            >
              {t("signIn.or")}
            </h2>
          </Col>
        </Row>
        <Row>
          <SignUpBox />
        </Row>
      </Container>
    </ColoredBackground>
  );
};
