/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { RoundedContour } from "../../core";
import LogImageSrc from "../assets/images/log-image.jpg";

export const SignUpBox: FC = () => {
  const { t } = useTranslation("SignInPage");

  return (
    <a
      href="/profile/register"
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
                font-size: 1.5rem;
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
          {t("signUpSection.title")}
        </span>
        <img
          css={css`
            width: 50%;
            height: 50%;
          `}
          src={LogImageSrc}
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
    </a>
  );
};