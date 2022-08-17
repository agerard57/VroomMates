/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { RoundedContour } from "../../../core";

type Props = {
  value: number | string;
  caption: string;
  color: string;
};

// If it is an integer, we want to convert it as a string.
// If it is a string, that means it is a float, so we want to round it.
const processedValue = (value: number | string): string => {
  if (typeof value === "number") {
    return value.toString();
  }
  return parseFloat(value).toPrecision(2);
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
          {processedValue(value)}
        </span>
      </div>
      <hr />
      <span
        css={css`
          font-family: "Baloo2";
          font-size: large;
          font-weight: 500;
          color: ${color};
        `}
      >
        {caption}
      </span>
    </div>
  </RoundedContour>
);
