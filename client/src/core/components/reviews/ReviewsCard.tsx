/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { RoundedContour } from "../..";
import { UserTypes } from "../../types";
import { ReviewElement } from "./ReviewElement";
import { StatsSection } from "./StatsSection";

type Props = {
  userReviews?: UserTypes["Review"][];
  title: string;
  displayStats?: boolean;
};

export const ReviewsCard: FC<Props> = ({
  userReviews,
  title,
  displayStats = false,
}) => {
  const { t } = useTranslation("Core");

  const nbReviews = (star: number, userReviews: UserTypes["Review"][]) =>
    userReviews.filter((review) => review.rating === star).length;

  return userReviews && userReviews?.length ? (
    <RoundedContour
      outsideStyling={css`
        padding: 0;
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
          {title}
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
        {/* For each of the 5 stars, count how many are there*/}
        {displayStats ? (
          <>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <StatsSection
                  title={t(`reviews.stars.${star}`)}
                  number={nbReviews(star, userReviews)}
                  key={star}
                />
              ))}
            </div>
            <hr />
          </>
        ) : null}
        {userReviews.map((review, index) => (
          <ReviewElement review={review} key={index} />
        ))}
      </div>
    </RoundedContour>
  ) : null;
};
