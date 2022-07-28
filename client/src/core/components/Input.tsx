/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  inputTitle: String;
};

export const Input: FC<Props> = ({ inputTitle }) => (
  <div
    css={css`
      box-sizing: border-box;

      background: #ffffff;
      border: 2px solid rgba(0, 0, 0, 0.15);
      border-radius: 60px;
    `}
  >
    <span
      css={css`
        font-family: "Baloo2";
        font-weight: 600;
        color: rgba(0, 0, 0, 0.74);
      `}
    >
      {inputTitle}
    </span>
  </div>
);
