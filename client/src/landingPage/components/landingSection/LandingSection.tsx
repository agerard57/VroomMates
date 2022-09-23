/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { SearchBox } from "../../../core";
import { HomeImage1 } from "../../assets";

export const LandingSection: FC = () => {
  const { t } = useTranslation("LandingPage");

  return (
    <section
      css={css`
        background: linear-gradient(
          180deg,
          #5096ff 0%,
          #86b6ff 82.15%,
          rgba(136, 183, 255, 0) 100%
        );
        height: 120vh;
      `}
    >
      <h1
        css={css`
          font-family: "Baloo2";
          font-weight: 700;
          color: white;
        `}
      >
        {t("landingSection.title")}
      </h1>
      <img
        src={HomeImage1}
        alt="home-1"
        css={css`
          width: 80%;
        `}
      />
      <SearchBox
        canClose={false}
        outsideStyling={css`
          margin: 5vw;
        `}
      />
    </section>
  );
};
