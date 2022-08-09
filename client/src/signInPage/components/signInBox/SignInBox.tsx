/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Input, RoundedContour, Button } from "../../../core";
import facebookIcon from "../../assets/icons/facebookIcon.svg";
import googleIcon from "../../assets/icons/googleIcon.svg";
import mailIcon from "../../assets/icons/mailIcon.svg";
import passwordIcon from "../../assets/icons/passwordIcon.svg";
import { SignInIcon } from "./SignInIcon";

export const SignInBox: FC = () => {
  const { t } = useTranslation("SignInPage");

  return (
    <div
      css={css`
        margin: 5vw;
        background-color: #5694f2;
        justify-content: space-around;
      `}
    >
      <Row>
        <Col xs={8}>
          <RoundedContour>
            <h2
              css={css`
                font-family: "Baloo2";
                font-weight: 500;
                text-align: center;
                font-size: 15px;
                padding: 2px;
              `}
            >
              {t("signUpSection.title")}
            </h2>
            <SignInIcon />
            <h2
              css={css`
                font-family: "Baloo2";
                font-weight: 500;
                text-align: center;
                font-size: 15px;
                text-decoration: underline;
              `}
            >
              {t("signUpSection.create")}
            </h2>
          </RoundedContour>
        </Col>
        <Col>
          <h2
            css={css`
              font-family: "Baloo2";
              font-weight: 1000;
              color: white;
              text-align: center;
              font-size: 40px;
              text-align: center;
            `}
          >
            {t("signUpSection.or")}
          </h2>
        </Col>
      </Row>
      <div
        css={css`
          margin-top: 10%;
        `}
      >
        <RoundedContour>
          <div>
            <h2
              css={css`
                font-family: "Baloo2";
                font-weight: 500;
                text-align: center;
              `}
            >
              {t("signInSection.title")}
            </h2>
            <hr />
            <div
            // css={css`
            //   // justify-content: space-around;
            // `}
            >
              <Row>
                <Col>
                  {/* <Button buttonText={t("signInSection.signInButton")} /> */}
                  <Input
                    inputName="googleSignIn"
                    inputType="radio"
                    inputPlaceholder="Google"
                    icon={googleIcon}
                  />
                </Col>
                <Col></Col>
                <Col>
                  <Input
                    inputName="facebookSignIn"
                    inputType="radio"
                    inputPlaceholder="Facebook"
                    icon={facebookIcon}
                  />
                </Col>
              </Row>
              <Row></Row>
              <Row>
                <Input
                  inputName="arrivalLocation"
                  inputType="text"
                  inputPlaceholder={t("signInSection.email")}
                  icon={mailIcon}
                />
              </Row>
              <Row>
                <Input
                  inputName="date"
                  inputType="text"
                  inputPlaceholder={t("signInSection.password")}
                  icon={passwordIcon}
                />
              </Row>
              <Row>
                <Button buttonText={t("signInSection.signInButton")} />
              </Row>
            </div>
          </div>
        </RoundedContour>
      </div>
    </div>
  );
};
