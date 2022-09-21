/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent, FC } from "react";

type Props = {
  inputName: string;
  isRequired?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TimeInput: FC<Props> = ({ inputName, onChange, isRequired }) => {
  const InputStyle = css`
    box-sizing: border-box;
    text-align: center;
    padding: 5px 10px;
    background: "#ffffff";
    border: 2px solid #a7a7a7;
    border-radius: 60px;
    outline: none;

    &:focus {
      border-color: #00a8ff;
    }
  `;

  return (
    <input
      type="time"
      id={inputName}
      name={inputName}
      css={InputStyle}
      onChange={onChange}
      required={isRequired}
    />
  );
};
