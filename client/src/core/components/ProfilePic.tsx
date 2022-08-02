/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import VerifiedProfile from "../assets/icons/verifiedProfile.svg";

type Props = {
  src: string;
  rating?: number;
  displayStars?: boolean;
  displayRating?: boolean;
  is_verified?: boolean;
};
export const ProfilePic: FC<Props> = ({
  src,
  rating,
  displayStars,
  displayRating,
  is_verified,
}) => {
  return (
    <>
      <img
        css={css`
          border-radius: 50%;
          padding-bottom: 0.5rem;
          width: 30%;
        `}
        src={src}
        alt="profilePic"
      />
      {is_verified ? (
        <img
          css={css`
            position: absolute;
            width: 5%;
          `}
          src={VerifiedProfile}
          alt="verifiedProfile"
        />
      ) : null}
      {displayRating ? (
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
