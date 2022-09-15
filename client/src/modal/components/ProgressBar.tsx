/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { SlideSpec } from "../types";

type Props = {
  slideNumber: number;
  slideSpecs: SlideSpec[];
};

export const ProgressBar: FC<Props> = ({ slideSpecs, slideNumber }) =>
  slideSpecs.length > 1 ? (
    <div
      css={css`
        width: 100%;
        height: 1.5rem;
        background: transparent;
        border: 2px solid #408cff;
        border-radius: 18px;
        margin-top: 0.7rem;
        padding: 2px;
        background-clip: content-box;
      `}
    >
      <div
        css={css`
          width: ${(slideNumber / (slideSpecs.length - 1)) * 100}%;
          // Animate
          transition: width 0.3s ease-in-out;
          height: 100%;
          background: #408cff;
          border-radius: 18px;
        `}
      />
    </div>
  ) : null;
