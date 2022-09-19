/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { FC } from "react";

type Props = {
  outsideStyling?: SerializedStyles;
};

export const ColoredBackground: FC<Props> = ({ children, outsideStyling }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      background-image: linear-gradient(
        140deg,
        hsl(219deg 100% 59%) 0%,
        hsl(228deg 85% 66%) 21%,
        hsl(239deg 66% 70%) 30%,
        hsl(253deg 51% 69%) 39%,
        hsl(274deg 36% 66%) 46%,
        hsl(310deg 29% 66%) 54%,
        hsl(342deg 41% 70%) 61%,
        hsl(4deg 58% 73%) 69%,
        hsl(16deg 81% 71%) 79%,
        hsl(24deg 100% 69%) 100%
      );
      background-size: 200% 200%;
      animation: gradient 15s ease infinite;
      min-height: 100vh;
      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      ${outsideStyling}
    `}
  >
    {children}
  </div>
);
