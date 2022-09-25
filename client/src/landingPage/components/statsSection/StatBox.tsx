/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { RoundedContour } from "../../../core";

type Props = {
  value: number;
  caption: string;
  color: string;
  isDistance?: boolean;
};

export const StatBox: FC<Props> = ({ value, caption, color }) => (
  <RoundedContour>
    <div>
      <div
        css={css`
          background: none;
          border: 3px solid ${color};
          box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.15);
          width: 15vw;
          height: 15vw;
          border-radius: 70px;
          font-family: "Baloo2";
          font-weight: 700;
          font-size: large;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        `}
      >
        <span
          css={css`
            font-family: "Baloo2";
            font-weight: 800;
            color: ${color};
          `}
        >
          {value}
        </span>
      </div>
      <hr />
      <span
        css={css`
          font-family: "Baloo2";
          font-size: 1rem;
          font-weight: 500;
          color: ${color};
        `}
      >
        {caption}
      </span>
    </div>
  </RoundedContour>
);
