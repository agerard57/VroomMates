/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { NotFoundImage } from "../../core";
import { RoundedContour } from "../../core";
import { StartLookingImage } from "../assets";

export const EmptyCard: FC = () => {
  const { t } = useTranslation("SearchPage");
  // if url has no params, show this card
  const isEmpty = window.location.href.includes("?");

  return (
    <RoundedContour
      outsideStyling={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        margin: 1rem 0;
        overflow: hidden;
        position: relative;
        aspect-ratio: 1/1;
      `}
    >
      {isEmpty ? (
        <>
          <img
            css={css`
              width: 80%;
              padding: 1rem;
            `}
            src={NotFoundImage}
            alt="not found"
          />
          <h2>{t("empty")}</h2>
        </>
      ) : (
        <>
          <img
            css={css`
              width: 80%;
              padding: 1rem;
            `}
            src={StartLookingImage}
            alt="not found"
          />
          <h2>{t("start")}</h2>
        </>
      )}
    </RoundedContour>
  );
};
