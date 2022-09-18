/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { RoundedContour } from "../../core";
import SignInImageSrc from "../assets/images/signInImage.jpg";

export const SignInBox: FC = () => {
  const { t } = useTranslation("RegisterPage");

  return (
    <a
      href="/profile/login"
      css={css`
        text-decoration: none;
      `}
    >
      <RoundedContour
        outsideStyling={`
            display: flex;
            flex-direction: column;
            align-items: center;
            
            span{
                padding: 5px;
                font-size: 1.3rem;
                color: black;
            }
        `}
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
          src={SignInImageSrc}
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
    </a>
  );
};
