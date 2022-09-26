/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { RoundedContour } from "../../core";
import { SignInImage } from "../assets";

export const SignInBox: FC = () => {
  const { t } = useTranslation("RegisterPage");

  const navigate = useNavigate();

  return (
    <RoundedContour
      outsideStyling={css`
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          padding: 5px;
          font-size: 1.3rem;
          color: black;
        }
      `}
      onClick={() => navigate("/profile/login")}
    >
      <span
        css={css`
          font-weight: 500;
          text-align: center;
        `}
      >
        {t("signIn.1")}
      </span>
      <img
        css={css`
          width: 50%;
          height: 50%;
        `}
        src={SignInImage}
        alt="log"
      />
      <span
        css={css`
          font-weight: 500;
          text-align: center;
          text-decoration: underline;
        `}
      >
        {t("signIn.2")}
      </span>
    </RoundedContour>
  );
};
