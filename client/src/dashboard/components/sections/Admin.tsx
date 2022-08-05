import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Item } from "../Item";
import { Title } from "../Title";

type Props = {
  status?: string;
};

export const Admin: FC<Props> = ({ status }) => {
  const { t } = useTranslation("Dashboard");
  return status === "admin" ? (
    <section>
      <Title title={t("adminSection.title")} />
      <Item title={t("adminSection.stats")} link="/admin/stats" />
      <Item
        title={t("adminSection.driversRequests")}
        link="/admin/driver-verification"
      />
      <Item title={t("adminSection.userList")} link="/admin/user-list" />
    </section>
  ) : null;
};