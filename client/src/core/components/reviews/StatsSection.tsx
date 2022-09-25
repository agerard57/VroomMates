/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col } from "react-bootstrap";

type Props = {
  title: string;
  number: number;
};

export const StatsSection: FC<Props> = ({ title, number }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      color: #787878;
      padding: 0.2rem 1.5rem;
    `}
  >
    <Col
      css={css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
      `}
    >
      <span>{title}</span>
    </Col>
    <Col
      css={css`
        display: flex;
        justify-content: flex-end;
      `}
    >
      <span>
        <b>{number}</b>
      </span>
    </Col>
  </div>
);
