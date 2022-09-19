/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs, RoundedContour } from "../../core";
import { MailIcon, PasswordIcon } from "../assets";
import { useSignInBox } from "../hooks";

export const SignInBox: FC = () => {
  const { t } = useTranslation("SignInPage");

  const { handleSubmit } = useSignInBox();

  return (
    <RoundedContour
      outsideStyling={css`
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
            inputType="email"
            inputPlaceholder={t("signInSection.email")}
            icon={MailIcon}
            isRequired
          />
        </Row>
        <Row>
          <Inputs.Text
            inputName="password"
            inputType="password"
            inputPlaceholder={t("signInSection.password")}
            icon={PasswordIcon}
            length={{ min: 8, max: 128 }}
            isRequired
          />
        </Row>
        <Row
          css={css`
            padding-top: 1rem;
          `}
        >
          <Inputs.Checkbox
            inputName="rememberMe"
            labelContent={t("signInSection.rememberMe")}
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
