/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col } from "react-bootstrap";

export const CardArrow: FC = () => (
  <Col
    xs={1}
    css={css`
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #0000000f;
      margin-right: 10px;

      &:hover {
        background: #0000001f;
      }
    `}
  >
    &gt;
  </Col>
);
