/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { normalizeDate } from "../../../core";
import { useLanguage } from "../../../language";

type Props = {
  date: Date;
};

export const DateSection: FC<Props> = ({ date }) => {
  const { language } = useLanguage();
  return (
    <div>
      <h3
        css={css`
          text-align: center;
          border-bottom: 1px solid #e6e6e6;
          padding: 2%;
          font-size: 1.25rem;
          font-weight: 500;
          color: #747474;
          word-spacing: 3px;
        `}
      >
        {normalizeDate(date, language, "date")}
      </h3>
    </div>
  );
};
