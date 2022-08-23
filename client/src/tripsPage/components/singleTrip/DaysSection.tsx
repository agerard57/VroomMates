/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";

import { useDaysDisplay } from "../../../core";

type Props = {
  dayOfWeek: number[];
};

export const DaysSection: FC<Props> = ({ dayOfWeek }) => {
  const { days } = useDaysDisplay(dayOfWeek);

  return (
    <Row
      css={css`
        display: block;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: nowrap;
        flex-direction: row;
        border: 1px solid #e6e6e6;
        width: fit-content;
        margin: 0 auto;
        span {
          display: block;
          width: auto;
          padding: 0 4px;
        }
      `}
    >
      {days}
    </Row>
  );
};
