/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, SetStateAction } from "react";

type Props = {
  onChange: (e: { target: { value: SetStateAction<any> } }) => void;
  title: string;
};

export const SelectInput: FC<Props> = ({ children, onChange, title }) => (
  <select
    onChange={onChange}
    aria-label={title}
    css={css`
      width: -webkit-fill-available;
      text-align: center;
      font-weight: 600;
      border-radius: 11px;
      border-color: #e0e0e0;
      margin: 5px 0;
      &:focus {
        border-color: #4274ff;
        color: #5a85ff;
      }
    `}
  >
    {children}
  </select>
);
