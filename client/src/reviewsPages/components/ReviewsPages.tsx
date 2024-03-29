/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import {
  ProfileBanner,
  ProfileHeader,
  ReviewsCard,
  Inputs,
  LoggedUserDataProps,
} from "../../core";
import { useReviewsPages } from "../hooks";

export const ReviewsPages: FC<LoggedUserDataProps> = ({ loggedUserData }) => {
  const { t } = useTranslation("ReviewsPages");

  const { reviews, currentPage, userId } = useReviewsPages(loggedUserData);

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
        <Inputs.Button
          type="hollow"
          onClick={() => {
            window.history.back();
          }}
          optionalStyling={css`
            margin: 1rem 0;
            width: 100%;
          `}
        >
          {t("back")}
        </Inputs.Button>
        <ReviewsCard
          userReviews={reviews}
          title={t(`reviews.${currentPage}.title`, { count: reviews.length })}
          displayStats={currentPage === "received" ? true : false}
        />
      </Container>
    </>
  );
};
