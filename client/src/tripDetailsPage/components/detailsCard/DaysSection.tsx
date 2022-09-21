/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";

import { useDaysDisplay } from "../../../core";

type Props = {
  type: string;
  daysOfWeek?: number[];
};

export const DaysSection: FC<Props> = ({ type, daysOfWeek }) => {
  const { displayDays } = useDaysDisplay(daysOfWeek);
  return type === "frequent" ? (
    <Row
      css={css`
        padding: 0 !important;
      `}
    >
      <div
        css={css`
          text-align: center;
          border-top: 1px solid #e6e6e6;
          box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.25);
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
        {displayDays}
      </div>
    </Row>
  ) : null;
};
