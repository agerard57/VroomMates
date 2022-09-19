/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { SlideSpec } from "../types";

type Props = {
  slideNumber: number;
  slideSpecs: SlideSpec[];
  isDisabled: boolean;
};

export const ProgressBar: FC<Props> = ({
  slideSpecs,
  slideNumber,
  isDisabled,
}) => {
  const color = isDisabled ? "#8d8d8d" : "#367fef";

  return slideSpecs.length > 1 ? (
    <div
      css={css`
        width: 100%;
        height: 1.5rem;
        background: transparent;
        border: 2px solid ${color};
        border-radius: 18px;
        margin-top: 0.7rem;
        padding: 2px;
        background-clip: content-box;
      `}
    >
      <div
        css={css`
          width: ${(slideNumber / (slideSpecs.length - 1)) * 100}%;
          transition: width 0.3s ease-in-out;
          height: 100%;
          border-radius: 18px;
          // animated background
          background: linear-gradient(
            90deg,
            ${color} 0%,
            ${color === "#367fef" ? "#a3c7ff" : "#8d8d8d"} 50%,
            ${color} 100%
          );
          background-size: 200% 100%;
          animation: gradient 7s ease infinite;
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      />
    </div>
  ) : null;
};
