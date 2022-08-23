import { FC } from "react";
import { useTranslation } from "react-i18next";

import { UserType } from "../../../core";
import { MenuListItem } from "../../../core";
import { MenuListTitle } from "../../../core";

type Props = {
  status?: UserType["Status"];
};

export const Admin: FC<Props> = ({ status }) => {
  const { t } = useTranslation("Dashboard");
  return status === "admin" ? (
    <section>
      <MenuListTitle title={t("adminSection.title")} />
      <MenuListItem title={t("adminSection.stats")} link="/admin/stats" />
      <MenuListItem
        title={t("adminSection.driversRequests")}
        link="/admin/driver-verification"
      />
      <MenuListItem
        title={t("adminSection.userList")}
        link="/admin/user-list"
      />
    </section>
  ) : null;
};
