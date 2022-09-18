/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent, FC } from "react";

type Props = {
  inputPlaceholder?: string;
  inputValue?: string;
  inputName: string;
  isRequired?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  length?: { min?: number; max?: number };
  size?: { rows: number; cols: number };
};

export const TextAreaInput: FC<Props> = ({
  inputPlaceholder,
  isRequired,
  onChange,
  inputValue,
  inputName,
  length,
  size = { rows: 3, cols: 50 },
}) => {
  const InputStyle = css`
    box-sizing: border-box;
    text-align: left;
    padding: 5px 10px;
    background: #ffffff;
    border: 2px solid #a7a7a7;
    border-radius: 10px;
    outline: none;

    &:focus {
      border-color: #00a8ff;
    }
  `;

  return (
    <textarea
      id={inputName}
      name={inputName}
      placeholder={inputPlaceholder}
      defaultValue={inputValue}
      minLength={length?.min}
      maxLength={length?.max}
      required={isRequired}
      css={InputStyle}
      onChange={onChange}
      rows={size.rows}
      cols={size.cols}
    />
  );
};
