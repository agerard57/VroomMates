/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { useDaysDisplay } from "../../../core";

type Props = {
  tripDays: number[];
};

export const DaysSection: FC<Props> = ({ tripDays }) => {
  const { days } = useDaysDisplay(tripDays);
  return (
    <div
      css={css`
        text-align: center;
        border-top: 1px solid #e6e6e6;
        box-shadow: 0px -0.5px 2px rgba(0, 0, 0, 0.25);
        justify-content: space-evenly;
        display: flex;
        flex-direction: row;
        span {
          margin: 0.8rem 0;
          font-size: 1rem;
          font-weight: 600;
        }
      `}
    >
      {days}
    </div>
  );
};
