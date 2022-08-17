/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  isFull: boolean;
};

export const FullLayout: FC<Props> = ({ isFull }) => {
  return isFull ? (
    <div
      css={css`
        position: absolute;
        background-color: rgba(196, 196, 196, 0.6);
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: black;
        text-align: center;
      `}
    ></div>
  ) : null;
};
