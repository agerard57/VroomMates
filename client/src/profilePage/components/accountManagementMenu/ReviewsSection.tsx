import { FC } from "react";
import { useTranslation } from "react-i18next";

import { MenuListItem, MenuListTitle } from "../../../core";

export const ReviewsSection: FC = () => {
  const { t } = useTranslation("ProfilePage");

  return (
    <section>
      <MenuListTitle title={t("accountManagementMenu.reviews.title")} />
      <MenuListItem
        title={t("accountManagementMenu.reviews.given")}
        link="/reviews/given"
      />
      <MenuListItem
        title={t("accountManagementMenu.reviews.received")}
        link="/reviews/received"
      />
    </section>
  );
};
