/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { useFlags } from "../../hooks";
import { EnglishFlag } from "./EnglishFlag";
import { FrenchFlag } from "./FrenchFlag";

// https://www.svgrepo.com/collection/international-flags-6/

export const Flags: FC = () => {
  const { onClick } = useFlags();
  return (
    <div
      css={css`
        z-index: 1;
        position: fixed;
        padding: 1vw 0 0 3vw;
        text-align: left;
        top: 1.3vw;
        display: grid;
        grid-auto-columns: 1fr;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1vw 0px;
        grid-template-areas:
          "frflag"
          "enflag";
        justify-items: end;
        align-items: center;
        align-content: center;

        svg {
          width: 10%;
          height: auto;
          opacity: 20%;
          transition: opacity 0.1s linear 0.1s;
        }

        svg:hover {
          cursor: pointer;
          opacity: 100%;
          transition: opacity 0.1s linear 0.1s;
        }
      `}
    >
      <FrenchFlag onClick={() => onClick("fr")} />
      <EnglishFlag
        onClick={() => {
          onClick("en");
        }}
      />
    </div>
  );
};
