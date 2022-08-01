/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

export const RoundedContour: FC = ({ children }) => (
  <div
    css={css`
      background: #ffffff;
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 10%;
    `}
  >
    {children}
  </div>
);
