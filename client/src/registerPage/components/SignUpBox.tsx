/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Inputs, RoundedContour } from "../../core";
import { useRegisterPage } from "../hooks";

export const SignUpBox: FC = () => {
  const { t } = useTranslation("RegisterPage");

  const { handleSubmit } = useRegisterPage();
  const navigate = useNavigate();

  const sectionStyle = css`
    padding: 0.5rem 0;
  `;

  return (
    <RoundedContour
      outsideStyling={css`
        padding: 1rem 2rem;

        .col,
        .col-4,
        .col-8,
        .col-6 {
          padding: 0;
        }

        input:not([type="checkbox"]) {
          width: -webkit-fill-available;
        }

        .row > div:first-of-type > input {
          margin: 0.3rem 10px 0.3rem 0;
        }

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
            {t("registerBox.title")}
          </h2>
        </Row>
        <hr />
        <Row css={sectionStyle}>
          <Col xs={6}>
            <Inputs.Text
              inputName="firstName"
              inputType="text"
              inputPlaceholder={t("registerBox.fields.name.firstName")}
              isRequired
            />
          </Col>
          <Col xs={6}>
            <Inputs.Text
              inputName="lastName"
              inputType="text"
              inputPlaceholder={t("registerBox.fields.name.lastName")}
              isRequired
            />
          </Col>
        </Row>
        <Row css={sectionStyle}>
          <Inputs.Text
            inputName="email"
            inputType="email"
            inputPlaceholder={t("registerBox.fields.email")}
            isRequired
          />
        </Row>
        <div css={sectionStyle}>
          <Row>
            <Inputs.Text
              inputName="password1"
              inputType="password"
              inputPlaceholder={t("registerBox.fields.password")}
              length={{ min: 8, max: 128 }}
              isRequired
            />
          </Row>
          <Row>
            <Inputs.Text
              inputName="password2"
              inputType="password"
              inputPlaceholder={t("registerBox.fields.confirmPassword")}
              length={{ min: 8, max: 128 }}
              isRequired
            />
          </Row>
        </div>
        <div css={sectionStyle}>
          <Row>
            <Col xs={4}>
              <Inputs.Text
                inputName="houseNumber"
                inputType="number"
                inputPlaceholder={t("registerBox.fields.address.houseNumber")}
                isRequired
              />
            </Col>
            <Col xs={8}>
              <Inputs.Text
                inputName="streetName"
                inputType="text"
                inputPlaceholder={t("registerBox.fields.address.streetName")}
                isRequired
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Inputs.Text
                inputName="city"
                inputType="text"
                inputPlaceholder={t("registerBox.fields.address.city")}
                isRequired
              />
            </Col>
            <Col xs={6}>
              <Inputs.Text
                inputName="zip"
                inputType="number"
                inputPlaceholder={t("registerBox.fields.address.zip")}
                isRequired
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Inputs.Text
                inputName="state"
                inputType="text"
                inputPlaceholder={t("registerBox.fields.address.state")}
                isRequired
              />
            </Col>
            <Col xs={6}>
              <Inputs.Text
                inputName="country"
                inputType="text"
                inputPlaceholder={t("registerBox.fields.address.country")}
                isRequired
              />
            </Col>
          </Row>
        </div>
        <Row css={sectionStyle}>
          <span
            css={css`
              color: #747474;
            `}
          >
            {t("registerBox.fields.birthDate")}
          </span>
          <Inputs.Date
            inputName="birthDate"
            inputPlaceholder={t("registerBox.fields.birthDate")}
            isRequired
          />
        </Row>
        <Row css={sectionStyle}>
          <Inputs.CheckboxInput
            inputName="termsAndConditions"
            labelContent={
              <>
                {t("registerBox.terms")}{" "}
                <a
                  href="#termsAndConditions"
                  onClick={() => navigate("/policies#termsAndConditions")}
                >
                  {t("registerBox.termsLink")}
                </a>
              </>
            }
          />
        </Row>
        <Row>
          <Inputs.Button
            type="primary"
            buttonType="submit"
            optionalStyling={css`
              margin: 1rem 0;
            `}
          >
            {t("registerBox.button")}
          </Inputs.Button>
        </Row>
      </form>
    </RoundedContour>
  );
};
