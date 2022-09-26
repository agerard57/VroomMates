/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  inputPlaceholder?: string;
  inputName: string;
  radioValue?: string;
  isRequired?: boolean;
  activeRadio: string;
  onClickRadio: () => void;
};

export const RadioInput: FC<Props> = ({
  inputPlaceholder,
  inputName,
  radioValue,
  activeRadio,
  onClickRadio,
}) => {
  const isActive = activeRadio === radioValue;

  const InputStyle = css`
    box-sizing: border-box;
    text-align: center;
    padding: 5px 0;
    margin: 0 0 10px 0;
    background: #ffffff;
    border: 2px solid #a7a7a7;
    width: inherit;
    border-radius: 60px;
    outline: none;
    white-space: nowrap;
    cursor: pointer;

    ${isActive ? "border-color: #00a8ff;" : ""}
  `;

  return (
    <label htmlFor={inputName} css={InputStyle} onClick={onClickRadio}>
      <input
        id={radioValue}
        name={inputName}
        type="radio"
        css={css`
          display: none;
        `}
        value={radioValue}
        checked={isActive}
        onClick={onClickRadio}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
      <span>{inputPlaceholder}</span>
    </label>
  );
};
