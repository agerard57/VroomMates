/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  tripDays: string[];
};

export const Days: FC<Props> = ({ tripDays }) => {
  const displayedDays = [
    "Sun.",
    "Mon.",
    "Tue.",
    "Wed.",
    "Thu.",
    "Fri.",
    "Sat.",
  ];
  // If a day from tripDays shows in displayedDate, display it with a checkmark.
  const days = displayedDays.map((day, index) => {
    return tripDays.includes(day) ? (
      <span
        key={index}
        css={css`
          color: black;
        `}
      >
        {day}
      </span>
    ) : (
      <span
        key={index}
        css={css`
          color: #bdbdbd;
        `}
      >
        {day}
      </span>
    );
  });
  return <>{days}</>;
};
