import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  LoggedUserDataProps,
  usePageTitle,
  UserInitializer,
  UserTypes,
} from "../../core";
import {
  getGivenReviewsByUserId,
  getReceivedReviewsByUserId,
} from "../services";

export const useReviewsPages = (
  loggedUserData: LoggedUserDataProps["loggedUserData"]
) => {
  const { t } = useTranslation("ReviewsPages");

  const userId = loggedUserData?.id || "";

  const [reviews, setReviews] = useState<UserTypes["Review"][]>([
    UserInitializer.review,
  ]);

  const currentPage = window.location.pathname.includes("received")
    ? "received"
    : "given";

  usePageTitle(t(`reviews.${currentPage}.title`, { count: reviews.length }));

  useEffect(() => {
    if (userId !== "")
      if (currentPage === "given")
        getGivenReviewsByUserId(userId).then((reviews) => setReviews(reviews));
      else
        getReceivedReviewsByUserId(userId).then((reviews) =>
          setReviews(reviews)
        );
  }, [currentPage, userId]);
  return { reviews, currentPage, userId };
};
