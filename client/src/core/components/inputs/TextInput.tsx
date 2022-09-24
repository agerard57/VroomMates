/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { ChangeEvent, FC } from "react";

type Props = {
  inputPlaceholder?: string;
  inputType?: "text" | "email" | "password" | "number";
  inputValue?: string;
  inputName: string;
  isRequired?: boolean;
  length?: { min?: number; max?: number };
  icon?: string;
  outsideStyling?: SerializedStyles;
  align?: "left" | "center";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  autocomplete?: string;
};

export const TextInput: FC<Props> = ({
  inputPlaceholder,
  inputType = "text",
  isRequired,
  inputValue,
  inputName,
  length,
  icon,
  outsideStyling,
  align = "center",
  onChange,
  value,
  autocomplete,
}) => {
  const InputStyle = css`
    box-sizing: border-box;
    text-align: ${align || icon ? "left" : "center"};
    padding: ${icon ? "5px 10px 5px 35px" : "5px 10px"};
    background: #ffffff;
    border: 2px solid #a7a7a7;
    border-radius: 60px;
    background: url(${icon}) no-repeat scroll 7px;
    outline: none;

    &:focus {
      border-color: #00a8ff;
    }

    ${outsideStyling}
  `;

  return (
    <input
      type={inputType}
      id={inputName}
      name={inputName}
      placeholder={inputPlaceholder}
      defaultValue={inputValue}
      minLength={length?.min}
      maxLength={length?.max}
      required={isRequired}
      css={InputStyle}
      onChange={onChange}
      autoComplete={autocomplete}
      value={value}
    />
  );
};
