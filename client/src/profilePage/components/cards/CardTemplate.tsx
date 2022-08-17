/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

import { RoundedContour } from "../../../core";

type Props = {
  icon: { src: string; alt: string };
  title: string;
  content: ReactNode;
};

export const CardTemplate: FC<Props> = ({ icon, title, content }) => (
  <RoundedContour
    outsideStyling={`
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          overflow: hidden;
          & > *{
            padding: 5%
            }
            `}
  >
    <Col sm={4}>
      <img src={icon.src} alt={icon.alt} />
    </Col>
    <Col
      sm={8}
      css={css`
        border-left: 2px solid rgba(0, 0, 0, 0.19);
        text-align: justify;
      `}
    >
      <Row>
        <h2>{title}</h2>
      </Row>
      <Row>{content}</Row>
    </Col>
  </RoundedContour>
);
