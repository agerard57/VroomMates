/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col } from "react-bootstrap";

export const PriceSection: FC = () => {
  return (
    <Col
      css={css`
        display: flex;
        justify-content: flex-end;
        color: #367fef;
        font-size: 1rem;
      `}
    >
      $0 {/* TODO */}
    </Col>
  );
};
