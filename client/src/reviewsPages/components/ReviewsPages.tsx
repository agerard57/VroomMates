/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { ProfileBanner, ProfileHeader, ReviewsCard, Button } from "../../core";
import { useReviewsPages } from "../hooks";

export const ReviewsPages: FC = () => {
  const { t } = useTranslation("ReviewsPages");

  const { reviews, currentPage, userId } = useReviewsPages();

  return (
    <>
      <ProfileBanner id={userId} />
      <Container
        css={css`
          position: absolute;
          top: 11.5vh;
        `}
      >
        <ProfileHeader id={userId} />
        <Button
          type="hollow"
          onClick={() => {
            window.history.back();
          }}
          optionalStyling={`
            margin: 1rem 0;
            width: 100%;
          `}
        >
          {t("back")}
        </Button>
        <ReviewsCard
          userReviews={reviews}
          title={t(`reviews.${currentPage}.title`, { count: reviews.length })}
          displayStats={currentPage === "received" ? true : false}
        />
      </Container>
    </>
  );
};
