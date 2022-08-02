/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row, Col } from "react-bootstrap";

type Props = {
  title: string;
  color?: string;
  notifications?: number;
};

export const Item: FC<Props> = ({ title, color, notifications }) => {
  return (
    <Row
      css={css`
        /* If the color if defined, use it, 
        else if there is a notification, use orange, 
        else use black */
        color: ${color ? color : notifications ? "#FF7A00" : "#000000"};
        font-size: large;
        padding-left: 0.5rem;
      `}
    >
      <Col
        css={css`
          text-align: left;
          font-weight: 500;
        `}
      >
        {title}
      </Col>
      <Col
        css={css`
          text-align: right;
          font-weight: 600;
        `}
      >
        {notifications ? `${notifications}+` : ""} &gt;
      </Col>
    </Row>
  );
};
