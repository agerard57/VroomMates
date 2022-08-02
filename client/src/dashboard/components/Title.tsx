/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  title: string;
};

export const Title: FC<Props> = ({ title }) => {
  return (
    <span
      css={css`
        font-weight: 800;
        text-align: left;
        font-size: large;
        display: block;
        font-size: 1.5rem;
      `}
    >
      {title}
    </span>
  );
};
