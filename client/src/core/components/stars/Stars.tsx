/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { CurvedStars } from "./CurvedStars";
import { Star } from "./Star";
import { StraightStars } from "./StraightStars";

type Props = {
  rating: number;
  isCurved?: boolean;
};

export const Stars: FC<Props> = ({ rating, isCurved }) => {
  const roundedRating = Math.round(rating);
  console.log(roundedRating);
  return (
    <div>
      {isCurved ? (
        <CurvedStars rating={rating} />
      ) : (
        <StraightStars rating={rating} />
      )}
    </div>
  );
};
