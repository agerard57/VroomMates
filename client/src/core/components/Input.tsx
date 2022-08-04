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
  inputType: "radio" | "text";
  inputPlaceholder?: string;
  inputName: string;
  radioValue?: string;
  isRequired?: boolean;
  icon?: string;
};

export const Input: FC<Props> = ({
  inputPlaceholder,
  inputType,
  inputName,
  radioValue,
  icon,
}) => {
  const InputStyle = css`
    box-sizing: border-box;
    text-align: ${icon ? "left" : "center"};
    padding: ${icon ? "5px 10px 6px 35px" : "5px 10px"};
    background: "#ffffff";
    border: 2px solid #a7a7a7;
    border-radius: 60px;
    background: url(${icon}) no-repeat scroll 7px;
    outline: none;

    &:focus {
      border-color: #00a8ff;
    }
  `;
  const onClickRadio = () => {
    const input =
      (document.querySelector(`#${radioValue}`) as HTMLInputElement) || null;
    if (input) {
      input.checked = true;
    }
  };

  return inputType === "radio" ? (
    <label htmlFor={inputName} css={InputStyle} onClick={onClickRadio}>
      <input
        id={radioValue}
        name={inputName}
        type={inputType}
        css={css``}
        value={radioValue}
      />
      <span>{inputPlaceholder}</span>
    </label>
  ) : (
    <input
      type={inputType}
      id={inputName}
      name={inputName}
      placeholder={inputPlaceholder}
      css={InputStyle}
    />
  );
};
