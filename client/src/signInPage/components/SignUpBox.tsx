/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { RoundedContour, RegisterImage } from "../../core";

export const SignUpBox: FC = () => {
  const { t } = useTranslation("SignInPage");

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
      onClick={() => navigate("/profile/register")}
    >
      <span
        css={css`
          font-weight: 500;
          text-align: center;
        `}
      >
        {t("signUpSection.title")}
      </span>
      <img
        css={css`
          width: 50%;
          height: 50%;
        `}
        src={RegisterImage}
        alt="log"
      />
      <span
        css={css`
          font-weight: 500;
          text-align: center;
          text-decoration: underline;
        `}
      >
        {t("signUpSection.create")}
      </span>
    </RoundedContour>
  );
};
