/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Button, ReviewsCard } from "../../core";
import { useReviewsPages } from "../hooks";

export const ReviewsPages: FC = () => {
  const { t } = useTranslation("ReviewsPages");

  const { reviews } = useReviewsPages();
  console.log(reviews);
  return (
    <Container
      css={css`
        padding: 5vw;
      `}
    >
      <h1>ReviewsPages page</h1>
      <p>{t("title")}</p>
      <Button
        type="hollow"
        onClick={() => {
          window.history.back();
        }}
      >
        {t("back")}
      </Button>
      <ReviewsCard userReviews={reviews} />
    </Container>
  );
};
