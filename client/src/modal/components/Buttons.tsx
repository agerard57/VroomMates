/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { Inputs } from "../../core";
import { SlideSpec } from "../types";

type Props = {
  slide: SlideSpec;
  previous: () => void;
  next: () => void;
  isDisabled: boolean;
};

export const Buttons: FC<Props> = ({ slide, previous, next, isDisabled }) => (
  <>
    <span
      css={css`
        padding-bottom: 0.5rem;
        text-align: center;
        color: #888888;
        font-size: 0.78rem;
      `}
    >
      {slide.message && slide.message}
    </span>
    <Inputs.Button type="primary" onClick={next} disabled={isDisabled}>
      {slide.nextButtonText}
    </Inputs.Button>
    {slide.previousButtonText && (
      <Inputs.Button
        type="small"
        onClick={previous}
        optionalStyling={css`
          padding-top: 0.5rem;
          background: transparent;
        `}
      >
        {slide.previousButtonText}
      </Inputs.Button>
    )}
  </>
);
