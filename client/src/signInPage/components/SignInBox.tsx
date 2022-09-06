/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs, RoundedContour } from "../../core";
import mailIcon from "../assets/icons/mailIcon.svg";
import passwordIcon from "../assets/icons/passwordIcon.svg";
import { useSignInBox } from "../hooks";

export const SignInBox: FC = () => {
  const { t } = useTranslation("SignInPage");

  const { handleSubmit } = useSignInBox();

  return (
    <RoundedContour
      outsideStyling={`
          padding: 1rem 2rem;
          
          input {
            margin: 0.3rem 0;
          }
          `}
    >
      <form onSubmit={handleSubmit}>
        <Row>
          <h2
            css={css`
              font-family: "Baloo2";
              font-weight: 500;
              text-align: center;
              margin-bottom: 0;
            `}
          >
            {t("signInSection.title")}
          </h2>
        </Row>
        <hr />
        <Row>
          <Inputs.Text
            inputName="email"
            inputPlaceholder={t("signInSection.email")}
            icon={mailIcon}
          />
        </Row>
        <Row>
          <Inputs.Password
            inputName="password"
            inputPlaceholder={t("signInSection.password")}
            icon={passwordIcon}
          />
        </Row>
        <Row
          css={css`
            padding-top: 1rem;
          `}
        >
          <Inputs.Checkbox
            inputName="rememberMe"
            labelText={t("signInSection.rememberMe")}
          />
          {/* TODO Add Password forgotten feature */}
        </Row>
        <Row>
          <Inputs.Button
            type="primary"
            buttonType="submit"
            optionalStyling={`
              margin: 1rem 0;
            `}
          >
            {t("signInSection.signInButton")}
          </Inputs.Button>
        </Row>
      </form>
    </RoundedContour>
  );
};
