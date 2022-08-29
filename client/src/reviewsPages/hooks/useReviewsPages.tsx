import { useTranslation } from "react-i18next";

import { usePageTitle } from "../../core";

export const useReviewsPages = () => {
  const { t } = useTranslation("ReviewsPages"
);
  usePageTitle(t("title"));
};
