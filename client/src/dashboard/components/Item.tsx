/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  link: string;
  color?: string;
  notifications?: number;
};

export const Item: FC<Props> = ({ title, link, color, notifications }) => {
  return (
    <Link
      to={link}
      css={css`
        /* If the color if defined, use it, 
          else if there is a notification, use orange, 
          else use black */
        color: ${color ? color : notifications ? "#FF7A00" : "#000000"};
        font-size: large;
        padding-left: 0.5rem;
        text-decoration: none;
        display: grid;
      `}
    >
      <Row>
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
          {notifications
            ? notifications > 9
              ? "9+ "
              : `${notifications} `
            : ""}
          &gt;
        </Col>
      </Row>
    </Link>
  );
};
