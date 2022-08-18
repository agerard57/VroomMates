import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Status } from "../../../core";
import { MenuListItem } from "../../../core";
import { MenuListTitle } from "../../../core";

type Props = {
  status?: Status;
};

export const Driver: FC<Props> = ({ status }) => {
  const { t } = useTranslation("Dashboard");
  if (status === "passenger")
    return (
      <section>
        <MenuListTitle title={t("driverSection.title")} />
        <MenuListItem
          title={t("driverSection.becomeDriver")}
          link="/driver/join"
        />
      </section>
    );
  else if (status === "driver" || status === "admin")
    return (
      <section>
        <MenuListTitle title={t("driverSection.title")} />
        <MenuListItem title={t("driverSection.addTrip")} link="/driver/add" />
      </section>
    );
  else return null;
};
