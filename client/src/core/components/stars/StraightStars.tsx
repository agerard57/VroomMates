import * as React from "react";
import { FC } from "react";

import { Star } from "./Star";

type Props = { rating: number };

export const StraightStars: FC<Props> = ({ rating }) => {
  // Map the stars and if the rating is less than 3, then all the stars are color=red and filled=true
  const stars = [...Array(5)].map((_, i) => {
    const filled = i < rating;
    const color = rating <= 2 ? "#FA7043" : "#367FEF";
    return <Star key={i} filled={filled} color={color} />;
  });

  return <div>{stars}</div>;
};
