/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { LoadingImage } from "../assets";

export const LoadingScreen: FC = () => {
  const { t } = useTranslation("LoadingScreen");

  return (
    <div
      className="container"
      css={css`
        flex: 1;
        flex-direction: row;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        visibility: hidden;
        animation: fadein 1.5s;
        animation-fill-mode: forwards;
        animation-delay: 0.5s; /* no spinner flickering for fast load times */
        @keyframes fadein {
          from {
            visibility: visible;
            opacity: 0;
          }
          to {
            visibility: visible;
            opacity: 1;
          }
        }
      `}
    >
      <h2
        css={css`
          font-weight: 700;
        `}
      >
        {t("title")}
      </h2>
      <img
        src={LoadingImage}
        css={css`
          width: 70%;
          margin: 0 auto;
        `}
        alt="loading"
      />
      <h2>{t("message")}</h2>
    </div>
  );
};
