/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  inputName: string;
  labelText: string;
};

export const CheckboxInput: FC<Props> = ({ inputName, labelText }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: flex-start;
      `}
    >
      <input
        type="checkbox"
        id={inputName}
        name={inputName}
        css={css`
          place-items: start;
        `}
      />
      <label
        htmlFor={inputName}
        css={css`
          margin-left: 5px;
        `}
      >
        {labelText}
      </label>
    </div>
  );
};
