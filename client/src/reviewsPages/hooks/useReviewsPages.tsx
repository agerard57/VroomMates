import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { usePageTitle, UserInitializer, UserType } from "../../core";
import {
  getGivenReviewsByUserId,
  getReceivedReviewsByUserId,
} from "../services";

export const useReviewsPages = () => {
  const { t } = useTranslation("ReviewsPages");
  const [reviews, setReviews] = useState<UserType["Review"][]>([
    UserInitializer["review"],
  ]);

  // TODO Implement real user
  const userId = "62b118b7af7d95ee39d508eb";

  const currentPage = window.location.pathname.includes("received")
    ? "received"
    : "given";

  usePageTitle(
    t(currentPage === "given" ? "givenReviewsTitle" : "receivedReviewsTitle")
  );

  useEffect(() => {
    currentPage === "given"
      ? getGivenReviewsByUserId(userId).then((reviews) => setReviews(reviews))
      : getReceivedReviewsByUserId(userId).then((reviews) =>
          setReviews(reviews)
        );
  }, [currentPage]);

  return { reviews };
};
