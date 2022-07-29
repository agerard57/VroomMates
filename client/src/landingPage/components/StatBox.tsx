/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { RoundedContour } from "../../core";

type Props = {
  number: number;
  caption: string;
  color: string;
};

export const StatBox: FC<Props> = ({ number, caption, color }) => (
  <RoundedContour>
    <div>
      <div
        css={css`
          background: none;
          border: 3px solid ${color};
          width: 15vw;
          height: 15vw;
          border-radius: 70px;
          font-family: "Baloo2";
          font-weight: 700;
        `}
      >
        {number}
      </div>
      <hr />
      <span
        css={css`
          font-family: "Baloo2";
          font-weight: 400;
        `}
      >
        {caption}
      </span>
    </div>
  </RoundedContour>
);
