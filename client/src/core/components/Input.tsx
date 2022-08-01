/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  inputTitle: string;
};

export const Input: FC<Props> = ({ inputTitle }) => (
  <input
    css={css`
      box-sizing: border-box;

      background: #ffffff;
      border: 2px solid #a7a7a7;
      border-radius: 60px;
    `}
    type="text"
    id="name"
    name={inputTitle}
    required
  />
);

/* 
  <div
    css={css`
      box-sizing: border-box;

      background: #ffffff;
      border: 2px solid #a7a7a7;
      border-radius: 60px;
    `}
  >
    <span
      css={css`
        font-family: "Baloo2";
        font-weight: 400;
        color: #a7a7a7;
      `}
    >
      {inputTitle}
    </span>
  </div> */
