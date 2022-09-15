/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { Inputs } from "../../core";
import { SlideSpec } from "../types";

type Props = {
  slide: SlideSpec;
  previous: () => void;
  next: () => void;
};

export const Buttons: FC<Props> = ({ slide, previous, next }) => (
  <>
    <span
      css={css`
        padding-bottom: 0.5rem;
        text-align: center;
        color: #888888;
      `}
    >
      {slide.message && slide.message}
    </span>
    <Inputs.Button type="primary" onClick={next}>
      {slide.nextButtonText}
    </Inputs.Button>
    {slide.backButtonText && (
      <Inputs.Button
        type="small"
        onClick={previous}
        optionalStyling={css`
          padding-top: 0.5rem;
        `}
      >
        {slide.backButtonText}
      </Inputs.Button>
    )}
  </>
);
