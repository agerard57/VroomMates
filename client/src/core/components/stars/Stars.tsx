import { FC } from "react";

import { CurvedStars } from "./CurvedStars";
import { StraightStars } from "./StraightStars";

type Props = {
  rating: number;
  isCurved?: boolean;
};

export const Stars: FC<Props> = ({ rating, isCurved }) => (
  <div>
    {isCurved ? (
      <CurvedStars rating={rating} />
    ) : (
      <StraightStars rating={rating} />
    )}
  </div>
);
