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
        `}
      >
        <Row>{slide.content}</Row>
        <Row
          css={css`
            bottom: 0;
            position: inherit;
          `}
        >
          <Buttons slide={slide} previous={previous} next={next} />
          <ProgressBar slideNumber={slideNumber} slideSpecs={slideSpecs} />
        </Row>
      </Container>
    </div>
  );
};
