/* eslint-disable complexity */

/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { FC } from "react";

type Props = {
  type: "primary" | "secondary" | "hollow" | "danger" | "small";
  buttonType?: "submit" | "button";
  onClick?: () => void;
  optionalStyling?: SerializedStyles;
  disabled?: boolean;
};

export const Button: FC<Props> = ({
  children,
  type,
  buttonType = "button",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  optionalStyling,
  disabled,
}) => {
  switch (type) {
    case "primary":
      return (
        <button
          type={buttonType}
          css={css`
            background: ${disabled ? "8d8d8d" : "#408cff"};
            border: 2px solid ${disabled ? "8d8d8d" : "#408cff"};
            border-radius: 18px;
            height: 50px;
            padding: 2px;
            background-clip: content-box;
            cursor: ${disabled ? "not-allowed" : "pointer"};
            ${optionalStyling};
          `}
          onClick={onClick}
          disabled={disabled}
        >
          <span
            css={css`
              font-family: "Baloo2";
              font-weight: 500;
              font-size: 1.2rem;
              color: ${disabled ? "8d8d8d" : "white"};
            `}
          >
            {children}
          </span>
        </button>
      );
    case "secondary":
      return (
        <button
          type={buttonType}
          css={css`
            font-size: 1.6rem;
            font-weight: 500;
            width: 12rem;
            background-color: #fa7043;
            padding: 4px;
            color: ${disabled ? "8d8d8d" : "white"};
            border: none;
            border-radius: 13px;
            ${optionalStyling};
            &:active {
              text-decoration: ${disabled ? "none" : "underline"};
            }
          `}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    case "hollow":
      return (
        <button
          type={buttonType}
          css={css`
            background-color: white;
            color: #5a85ff;
            font-weight: 600;
            border-radius: 10px;
            border: 2px solid #cddafe;
            ${optionalStyling};
            &:active {
              background-color: #cddafe;
              color: ${disabled ? "8d8d8d" : "white"};
            }
          `}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    case "danger":
      return (
        <button
          type={buttonType}
          css={css`
            background-color: white;
            color: #ff3737;
            font-weight: 600;
            border-radius: 10px;
            border: 2px solid #ff9b9b;
            ${optionalStyling};
            &:active {
              background-color: #ff9b9b;
              color: ${disabled ? "8d8d8d" : "white"};
            }
          `}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    case "small":
      return (
        <button
          type={buttonType}
          css={css`
            background-color: white;
            color: #3d3d3d;
            font-weight: 600;
            border-radius: 10px;
            border: none;
            text-decoration: underline;
            ${optionalStyling};
            &:hover {
              color: black;
            }
          `}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          type={buttonType}
          css={css`
            background: #569aff;
            border: 2px solid #569aff;
            border-radius: 16px;
            padding: 10px;
            height: 40px;
            padding: 2px;
            background-clip: content-box;
            ${optionalStyling};
          `}
          onClick={onClick}
          disabled={disabled}
        >
          <span
            css={css`
              font-family: "Baloo2";
              font-weight: 500;
              color: ${disabled ? "8d8d8d" : "white"};
            `}
          >
            {children}
          </span>
        </button>
      );
  }
};
