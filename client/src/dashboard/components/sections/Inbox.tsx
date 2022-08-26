import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Status } from "../../../core";
import { Item } from "../Item";
import { Title } from "../Title";

type Props = {
  status?: Status;
};

export const Inbox: FC<Props> = ({ status }) => {
  const { t } = useTranslation("Dashboard");
  return status ? (
    <section>
      <Title title={t("inboxSection.title")} />
      <Item
        title={t("inboxSection.messages")}
        link="/inbox/messages"
        notifications={1}
      />
      <Item
        title={t("inboxSection.notifications")}
        link="/inbox/notifications"
        notifications={7}
      />
    </section>
  ) : null;
};
