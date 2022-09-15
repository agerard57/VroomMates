/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  type: "primary" | "secondary" | "hollow" | "danger" | "small";
  buttonType?: "submit" | "button";
  onClick?: () => void;
  optionalStyling?: any;
};

export const Button: FC<Props> = ({
  children,
  type,
  buttonType = "button",
  onClick = () => {},
  optionalStyling,
}) => {
  switch (type) {
    case "primary":
      return (
        <button
          type={buttonType}
          css={css`
            background: #408cff;
            border: 2px solid #408cff;
            border-radius: 18px;
            height: 50px;
            padding: 2px;
            background-clip: content-box;
            ${optionalStyling};
          `}
          onClick={onClick}
        >
          <span
            css={css`
              font-family: "Baloo2";
              font-weight: 500;
              font-size: 1.2rem;
              color: white;
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
            color: white;
            border: none;
            border-radius: 13px;
            ${optionalStyling};
            &:active {
              text-decoration: underline;
            }
          `}
          onClick={onClick}
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
              color: white;
            }
          `}
          onClick={onClick}
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
              color: white;
            }
          `}
          onClick={onClick}
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
        >
          <span
            css={css`
              font-family: "Baloo2";
              font-weight: 500;
              color: white;
            `}
          >
            {children}
          </span>
        </button>
      );
  }
};
