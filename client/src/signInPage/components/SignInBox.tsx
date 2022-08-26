/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { useTranslation } from "react-i18next";

import { Input, RoundedContour, Button } from "../../core";
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
      <GoogleLogin
        clientId="374277909154-56jflke52kogao5omqr5l29k1mpdukgc.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId="1521176028311446"
        autoLoad={true}
        fields="public_profile,name,email,picture"
        onClick={responseGoogle}
        callback={responseGoogle}
      />
      ,
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
          <Input
            inputName="googleSignIn"
            inputType="radio"
            inputPlaceholder="Google"
            icon={googleIcon}
          />
        </Col>
        <Col>
          <Input
            inputName="facebookSignIn"
            inputType="radio"
            inputPlaceholder="Facebook"
            icon={facebookIcon}
          />
        </Col>
      </Row>
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
        <Button type="primary" buttonType="submit">
          {t("signInSection.signInButton")}
        </Button>
      </Row>
    </RoundedContour>
  );
};
