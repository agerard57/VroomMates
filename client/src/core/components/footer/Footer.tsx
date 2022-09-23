/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { MobileFooter } from "./MobileFooter";

export const Footer: FC = () => (
  <section
    css={css`
      margin-bottom: 2rem;
      height: 100vh;
      display: contents;
      svg {
        margin-bottom: 4rem;
    `}
  >
    <MobileFooter />
  </section>
);
