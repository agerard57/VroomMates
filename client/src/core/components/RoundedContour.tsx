/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { FC } from "react";

type Props = {
  onClick?: () => void;
  outsideStyling?: SerializedStyles;
};

export const RoundedContour: FC<Props> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  outsideStyling,
}) => (
  <div
    onClick={onClick}
    css={css`
      background: #ffffff;
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.45);
      border-radius: 10px;
      padding: 10%;
      ${outsideStyling};
    `}
  >
    {children}
  </div>
);
