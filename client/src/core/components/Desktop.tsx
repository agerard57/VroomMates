/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "../../language";
import { PhoneImage } from "../assets";

// Note that this file does not exist in the final project.
// It is only used while developing the desktop version of the app.
export const Desktop: FC = () => {
  const { t } = useTranslation("Core");
  const { language, change } = useLanguage();

  return (
    <div
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        opacity: 0;
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
      <div
        css={css`
          font-family: "Baloo2";
          margin-bottom: 1rem;
        `}
      >
        <h1
          css={css`
            font-weight: 700;
            font-size: 3rem;
          `}
        >
          {t("desktopPage.title")}
        </h1>
        <h2
          css={css`
            font-weight: 500;
            font-size: 2rem;
          `}
        >
          {t("desktopPage.subtitle")}
        </h2>
        <hr />
        <span
          css={css`
            font-weight: 400;
            font-size: 1.5rem;
            text-align: center;
          `}
        >
          {t("desktopPage.text")}
        </span>
      </div>
      <div>
        <img
          src={PhoneImage}
          css={css`
            width: 50%;
            height: 100%;
            border-radius: 20px;
          `}
          alt="phone"
        />
      </div>
      <div
        css={css`
          margin-top: 1rem;
          font-weight: 700;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        `}
      >
        <span
          css={css`
            text-align: center;
            color: ${language === "en" ? "black" : "#6c6c6c"};
            padding: 0.2rem;
            font-size: 1.5rem;
            cursor: pointer;
          `}
          onClick={() => change("en")}
        >
          EN
        </span>
        |
        <span
          css={css`
            text-align: center;
            color: ${language === "fr" ? "black" : "#6c6c6c"};
            padding: 0.2rem;
            font-size: 1.5rem;
            cursor: pointer;
          `}
          onClick={() => change("fr")}
        >
          FR
        </span>
      </div>
    </div>
  );
};
