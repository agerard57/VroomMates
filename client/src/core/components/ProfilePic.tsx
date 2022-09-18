/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import VerifiedProfile from "../assets/icons/verifiedProfile.svg";
import { s3UrlBuilder } from "../helpers";
import { Stars } from "./stars";

type Props = {
  src: string;
  rating?: number;
  displayStars?: boolean;
  displayRating?: boolean;
  isVerified?: boolean;
  outsidePictureStyling?: any;
  onClick?: () => void;
};
export const ProfilePic: FC<Props> = ({
  src,
  rating,
  displayStars,
  displayRating,
  isVerified,
  outsidePictureStyling,
  onClick,
}) => {
  return (
    <>
      <img
        css={css`
          border-radius: 50%;
          width: 30%;
          aspect-ratio: 1/1;
          cursor: ${onClick ? "pointer" : "default"};
          ${outsidePictureStyling};
        `}
        src={s3UrlBuilder(src)}
        onClick={onClick}
        alt="profilePic"
        key={src}
      />
      {isVerified ? (
        <img
          css={css`
            position: absolute;
            width: 5%;
          `}
          src={VerifiedProfile}
          alt="verified profile"
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
