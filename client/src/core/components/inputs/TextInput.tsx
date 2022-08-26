/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  inputPlaceholder?: string;
  inputValue?: string;
  inputName: string;
  radioValue?: string;
  isRequired?: boolean;
  icon?: string;
};

export const TextInput: FC<Props> = ({
  inputPlaceholder,
  inputValue,
  inputName,
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

  return (
    <input
      type="text"
      id={inputName}
      name={inputName}
      placeholder={inputPlaceholder}
      defaultValue={inputValue}
      css={InputStyle}
    />
  );
};
