/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  buttonText: string;
};

export const Button: FC<Props> = ({ buttonText }) => (
  <button
    css={css`
      background: #569aff;
      border: 2px solid #569aff;
      border-radius: 16px;
      padding: 10px;
      height: 40px;
      padding: 2px;
      background-clip: content-box;
    `}
  >
    <span
      css={css`
        font-family: "Baloo2";
        font-weight: 500;
        color: white;
      `}
    >
      {buttonText}
    </span>
  </button>
);
