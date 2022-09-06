/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { useTranslation } from "react-i18next";

import { Inputs, RoundedContour } from "../../core";
import facebookIcon from "../assets/icons/facebookIcon.svg";
import googleIcon from "../assets/icons/googleIcon.svg";
import mailIcon from "../assets/icons/mailIcon.svg";
import passwordIcon from "../assets/icons/passwordIcon.svg";

export const SignInBox: FC = () => {
  const { t } = useTranslation("SignInPage");
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  return (
    <RoundedContour
      outsideStyling={`
          padding: 1rem;
          `}
    >
      <form
        action={`${process.env.REACT_APP_API_URL}/profile/login`}
        method="post"
      >
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
          <Col>
            <GoogleLogin
              clientId="374277909154-56jflke52kogao5omqr5l29k1mpdukgc.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Col>
          <Col>
            <FacebookLogin
              appId="1521176028311446"
              autoLoad={true}
              fields="public_profile,name,email,picture"
              onClick={responseGoogle}
              callback={responseGoogle}
            />
          </Col>
        </Row>
        <Row>
          <Inputs.TextInput
            inputName="email"
            inputPlaceholder={t("signInSection.email")}
            icon={mailIcon}
          />
        </Row>
        <Row>
          <Inputs.TextInput
            inputName="password"
            inputPlaceholder={t("signInSection.password")}
            icon={passwordIcon}
          />
        </Row>
        <Row>
          <Inputs.Button type="primary" buttonType="submit">
            {t("signInSection.signInButton")}
          </Inputs.Button>
        </Row>
      </form>
    </RoundedContour>
  );
};