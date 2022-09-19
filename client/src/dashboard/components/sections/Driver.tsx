import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BecomeDriverModalBuilder } from "../../../becomeDriverModal";
import { UserTypes } from "../../../core";
import { MenuListItem } from "../../../core";
import { MenuListTitle } from "../../../core";
import { useModal } from "../../../modal";

type Props = {
  status?: UserTypes["Status"];
};

export const Driver: FC<Props> = ({ status }) => {
  const { t } = useTranslation("Dashboard");

  const { openModal } = useModal();
  const screens = BecomeDriverModalBuilder();

  if (status === "passenger")
    return (
      <section>
        <MenuListTitle title={t("driverSection.title")} />
        <MenuListItem
          title={t("driverSection.becomeDriver")}
          onClick={() => openModal(screens)}
          link="/dashboard"
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
