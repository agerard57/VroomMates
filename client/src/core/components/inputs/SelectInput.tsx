/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, SetStateAction } from "react";

type Props = {
  onChange: (e: { target: { value: SetStateAction<any> } }) => void;
  title: string;
  align?: "left" | "center";
};

export const SelectInput: FC<Props> = ({
  children,
  onChange,
  title,
  align = "center",
}) => (
  <select
    onChange={onChange}
    aria-label={title}
    css={css`
      width: -webkit-fill-available;
      text-align: ${align === "center" ? "center" : "left"};
      ${align === "left" ? "padding: 0 5px;" : ""}
      font-weight: 500;
      border-radius: 11px;
      border-color: #e0e0e0;
      margin: 5px 0;
      -moz-appearance: none; /* Firefox */
      -webkit-appearance: none; /* Safari and Chrome */
      appearance: none;

      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'><polyline points='6 9 12 15 18 9'></polyline></svg>");
      background-repeat: no-repeat;
      background-position: right 0.7em top 50%, 0 0;
      background-size: 0.65em auto, 100%;

      &:focus {
        border-color: #4274ff;
        color: #5a85ff;
      }
    `}
  >
    {children}
  </select>
);
