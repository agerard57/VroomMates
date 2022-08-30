/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";

type Props = {
  icon: { src: string; alt: string; active: boolean };
  content: string;
};

export const ElementTemplate: FC<Props> = ({ icon, content }) => (
  <Row
    css={css`
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      display: flex;
      align-items: center;
      width: auto;
    `}
  >
    <Col
      sm={4}
      css={css`
        width: auto;
      `}
    >
      <img
        src={icon.src}
        alt={icon.alt}
        css={css`
          filter: ${icon.active
            ? "invert(41%) sepia(64%) saturate(1284%) hue-rotate(194deg) brightness(95%) contrast(97%);"
            : "invert(53%) sepia(87%) saturate(1979%) hue-rotate(333deg) brightness(102%) contrast(96%)"};
        `}
      />
    </Col>
    <Col sm={8}>
      <span
        css={css`
          font-size: 1rem;
        `}
      >
        {content}
      </span>
    </Col>
  </Row>
);
