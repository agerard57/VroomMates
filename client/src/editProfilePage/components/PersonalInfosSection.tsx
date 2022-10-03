/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../core";
import { Props } from "../types";

export const PersonalInfosSection: FC<Props> = ({
  userInputs,
  setUserInputs,
}) => {
  const { t } = useTranslation("EditProfilePage");
  const sectionStyle = css`
    padding: 0.5rem 0;
  `;

  return (
    <Container
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <p
        css={css`
          color: #636363;
          padding-top: 1rem;
          text-align: left;
          font-weight: 500;
          margin-bottom: 0.5rem;
        `}
      >
        {t("personalInfos.title")}
      </p>
      <div
        css={css`
          padding: 1rem 2rem;

          .col,
          .col-4,
          .col-8,
          .col-6 {
            padding: 0;
          }

          input:not([type="checkbox"]) {
            width: -webkit-fill-available;
            width: -moz-available;
          }

          .row > div:first-of-type > input {
            margin: 0.3rem 10px 0.3rem 0;
          }

          input {
            margin: 0.3rem 0;
          }
        `}
      >
        <Row css={sectionStyle}>
          <Col xs={6}>
            <Inputs.Text
              inputName="firstName"
              inputType="text"
              inputPlaceholder={t("personalInfos.fields.name.firstName")}
              value={userInputs.name.first_name}
              isRequired
            />
          </Col>
          <Col xs={6}>
            <Inputs.Text
              inputName="lastName"
              inputType="text"
              inputPlaceholder={t("personalInfos.fields.name.lastName")}
              value={userInputs.name.last_name}
              isRequired
            />
          </Col>
        </Row>
        <Row css={sectionStyle}>
          <Inputs.Text
            inputName="email"
            inputType="email"
            inputPlaceholder={t("personalInfos.fields.email")}
            value={userInputs.email.email_address}
            isRequired
          />
        </Row>
        <div css={sectionStyle}>
          <Row>
            <Inputs.Text
              inputName="password1"
              inputType="password"
              inputPlaceholder={t("personalInfos.fields.password")}
              length={{ min: 8, max: 128 }}
              isRequired
            />
          </Row>
          <Row>
            <Inputs.Text
              inputName="password2"
              inputType="password"
              inputPlaceholder={t("personalInfos.fields.confirmPassword")}
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
                inputPlaceholder={t("personalInfos.fields.address.houseNumber")}
                value={userInputs.address.house_number.toString()}
                isRequired
              />
            </Col>
            <Col xs={8}>
              <Inputs.Text
                inputName="streetName"
                inputType="text"
                inputPlaceholder={t("personalInfos.fields.address.streetName")}
                value={userInputs.address.street_name}
                isRequired
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Inputs.Text
                inputName="city"
                inputType="text"
                inputPlaceholder={t("personalInfos.fields.address.city")}
                value={userInputs.address.city}
                isRequired
              />
            </Col>
            <Col xs={6}>
              <Inputs.Text
                inputName="zip"
                inputType="number"
                inputPlaceholder={t("personalInfos.fields.address.zip")}
                value={userInputs.address.zip.toString()}
                isRequired
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Inputs.Text
                inputName="state"
                inputType="text"
                inputPlaceholder={t("personalInfos.fields.address.state")}
                value={userInputs.address.state}
                isRequired
              />
            </Col>
            <Col xs={6}>
              <Inputs.Text
                inputName="country"
                inputType="text"
                inputPlaceholder={t("personalInfos.fields.address.country")}
                value={userInputs.address.country}
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
            {t("personalInfos.fields.birthDate")}
          </span>
          <Inputs.Date
            inputName="birthDate"
            inputPlaceholder={t("personalInfos.fields.birthDate")}
            value={new Date(userInputs.birth_date).toISOString().split("T")[0]}
            isRequired
          />
        </Row>
      </div>
    </Container>
  );
};
