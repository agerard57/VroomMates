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
          width: 15vw;
          height: 15vw;
          border-radius: 70px;
          font-family: "Baloo2";
          font-weight: 700;
        `}
      >
        {processedValue(value)}
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
