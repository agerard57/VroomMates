/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { FC } from "react";

type Props = {
  inputPlaceholder?: string;
  inputName: string;
  isRequired?: boolean;
  onClickCheckbox(): void;
};

export const CheckboxButton: FC<Props> = ({
  inputPlaceholder,
  inputName,
  onClickCheckbox,
}) => {
  const [selected, setSelected] = useState<boolean>(false);
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

    &:hover {
      cursor: pointer;
    }
    ${selected ? "border-color: #00a8ff;" : ""}
  `;

  return (
    <label htmlFor={inputName} css={InputStyle}>
      <input
        id={inputName}
        name={inputName}
        type="checkbox"
        css={css`
          display: none;
        `}
        value={inputName}
        checked={selected}
        onClick={() => {
          onClickCheckbox();
          setSelected(!selected);
        }}
        onChange={() => {}}
      />
      <span>{inputPlaceholder}</span>
    </label>
  );
};
