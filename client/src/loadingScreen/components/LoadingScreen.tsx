/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BlueBorderBackground } from "../../core";
import { ReactComponent as SpinnerSvg } from "../assets/spinner.svg";

export const LoadingScreen: FC = () => {
  const { t } = useTranslation("LoadingScreen");
  return (
    <BlueBorderBackground backgroundColor={"white"}>
      <div
        className="container"
        css={css`
          flex: 1;
          flex-direction: row;
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 1;
          transition: opacity 1s;
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      >
        <h2>{t("loading")}</h2>
        <SpinnerSvg />
      </div>
    </BlueBorderBackground>
  );
};
