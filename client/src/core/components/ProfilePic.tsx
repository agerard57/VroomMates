/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import VerifiedProfile from "../assets/icons/verifiedProfile.svg";
import { Stars } from "./stars";

type Props = {
  src: string;
  rating?: number;
  displayStars?: boolean;
  displayRating?: boolean;
  isVerified?: boolean;
};
export const ProfilePic: FC<Props> = ({
  src,
  rating,
  displayStars,
  displayRating,
  isVerified,
}) => {
  return (
    <>
      <img
        css={css`
          border-radius: 50%;
          width: 30%;
        `}
        src={src}
        alt="profilePic"
      />
      {isVerified ? (
        <img
          css={css`
            position: absolute;
            width: 5%;
          `}
          src={VerifiedProfile}
          alt="verifiedProfile"
        />
      ) : null}
      {displayStars && rating ? <Stars rating={rating} isCurved /> : null}
      {displayRating && rating ? (
        <div
          css={css`
            font-size: 1.2rem;
            font-weight: 300;
            color: #adadad;
          `}
        >
          {rating} / 5
        </div>
      ) : null}
    </>
  );
};
