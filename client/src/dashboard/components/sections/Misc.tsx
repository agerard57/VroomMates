import { FC } from "react";
import { useTranslation } from "react-i18next";

import { MenuListItem } from "../../../core";
import { MenuListTitle } from "../../../core";

export const Misc: FC = () => {
  const { t } = useTranslation("Dashboard");
  return (
    <section>
      <MenuListTitle title={t("miscSection.title")} />
      <MenuListItem title={t("miscSection.conditions")} link="/policies" />
    </section>
  );
};
