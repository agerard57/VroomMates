/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container, Row } from "react-bootstrap";

import { useModal } from "../hooks/useModal";
import { modalStyles } from "../styles";
import { Buttons } from "./Buttons";
import { ProgressBar } from "./ProgressBar";

export const Modal: FC = () => {
  const { isOpen, slideSpecs, iterator } = useModal();
  const { previous, slideNumber, next } = iterator;
  const slide = slideSpecs[slideNumber];

  return (
    <div
      id="modal"
      css={modalStyles(isOpen)}
      className={isOpen ? "opened" : "closed"}
    >
      <Container
        css={css`
          height: 100%;
          width: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: "Baloo2";
          text-align: center;
        `}
      >
        <Row
          css={css`
            flex: auto;
            overflow-y: auto;
            border-radius: 10px;
            border: 1px solid #e0e0e0;
            padding: 1rem;
          `}
        >
          {slide.content}
        </Row>
        <Row
          css={css`
            position: inherit;
            padding: 1rem 0.2rem 0 0;
            background: #ffffff;
          `}
        >
          <Buttons slide={slide} previous={previous} next={next} />
          <ProgressBar slideNumber={slideNumber} slideSpecs={slideSpecs} />
        </Row>
      </Container>
    </div>
  );
};
