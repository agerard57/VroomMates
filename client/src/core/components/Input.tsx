/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

// Props : {
//   inputType: button | text | password;
//   inputPlaceholder?: string;
//   imgSrc?: string;
//   inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// minLength?: number;
// maxLength?: number;
// minValue?: number;
// maxValue?: number;
// minDate?: string;
// maxDate?: string;
// minAge?: number;
// maxAge?: number;

type Props = {
  inputType: "button" | "text";
  inputPlaceholder?: string;
  inputName: string;
  isRequired?: boolean;
  icon?: string;
};

export const Input: FC<Props> = ({
  inputPlaceholder,
  inputType,
  inputName,
  icon,
}) => (
  <input
    css={css`
      box-sizing: border-box;
      text-align: ${icon ? "left" : "center"};
      padding: ${icon ? "5px 10px 6px 35px" : "5px 10px"};
      background: #ffffff;
      border: 2px solid #a7a7a7;
      border-radius: 60px;
      background: url(${icon}) no-repeat scroll 7px;
    `}
    type={inputType}
    id={inputName}
    name={inputName}
    placeholder={inputPlaceholder}
  />
);

/* 
  <div
    css={css`
      box-sizing: border-box;

      background: #ffffff;
      border: 2px solid #a7a7a7;
      border-radius: 60px;
    `}
  >
    <span
      css={css`
        font-family: "Baloo2";
        font-weight: 400;
        color: #a7a7a7;
      `}
    >
      {inputTitle}
    </span>
  </div> */
