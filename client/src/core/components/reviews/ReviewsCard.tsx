/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { RoundedContour } from "../..";
import { UserType } from "../../types/UserType";
import { ReviewElement } from "./ReviewElement";

type Props = {
  userReviews?: UserType["Review"][];
};

export const ReviewsCard: FC<Props> = ({ userReviews }) => {
  const { t } = useTranslation("Core");

  return userReviews ? (
    <RoundedContour
      outsideStyling={`
            padding:0;
            overflow: hidden;
            `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <h2
          css={css`
            padding: 0.5rem 1rem;
            margin-bottom: 0;
          `}
        >
          {t("reviews.title", { count: userReviews.length })}
        </h2>
        <span>
          {t("reviews.review", {
            nbReviews: userReviews.length,
            count: userReviews.length,
          })}
        </span>
      </div>
      <hr
        css={css`
          margin-top: 0;
        `}
      />
      <div>
        {userReviews.map((review, index) => (
          <ReviewElement review={review} key={index} />
        ))}
      </div>
    </RoundedContour>
  ) : null;
};
