/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = { onClick(): void };

export const FrenchFlag: FC<Props> = ({ onClick }) => (
  <div>
    <svg
      onClick={onClick}
      css={css`
        grid-area: frflag;
      `}
      width={512}
      height={335.454}
      viewBox="0 0 512 335.45401"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.345 0C17.167 0 0 17.167 0 38.345v258.759c0 21.177 17.167 38.345 38.345 38.345h132.322V0z"
        fill="#41479b"
      />
      <path fill="#f5f5f5" d="M170.67.004h170.67v335.45H170.67z" />
      <path
        d="M473.655 0H341.333v335.448h132.322c21.177 0 38.345-17.167 38.345-38.345V38.345C512 17.167 494.833 0 473.655 0z"
        fill="#ff4b55"
      />
    </svg>
  </div>
);
