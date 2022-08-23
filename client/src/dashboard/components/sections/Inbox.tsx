import { FC } from "react";
import { useTranslation } from "react-i18next";

import { UserType } from "../../../core";
import { MenuListItem } from "../../../core";
import { MenuListTitle } from "../../../core";

type Props = {
  status?: UserType["Status"];
};

export const Inbox: FC<Props> = ({ status }) => {
  const { t } = useTranslation("Dashboard");
  return status ? (
    <section>
      <MenuListTitle title={t("inboxSection.title")} />
      <MenuListItem
        title={t("inboxSection.messages")}
        link="/inbox/messages"
        notifications={1}
      />
      <MenuListItem
        title={t("inboxSection.notifications")}
        link="/inbox/notifications"
        notifications={7}
      />
    </section>
  ) : null;
};
