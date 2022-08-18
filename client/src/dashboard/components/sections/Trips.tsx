import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Status } from "../../../core";
import { MenuListItem } from "../../../core";
import { MenuListTitle } from "../../../core";

type Props = {
  status?: Status;
};

export const Trips: FC<Props> = ({ status }) => {
  const { t } = useTranslation("Dashboard");
  return status ? (
    <section>
      <MenuListTitle title={t("tripsSection.title")} />
      <MenuListItem
        title={t("tripsSection.manageTrips")}
        link="/trips"
        color="#367FEF"
      />
    </section>
  ) : (
    <section>
      <MenuListTitle title={t("tripsSection.title")} />
      <MenuListItem title={t("tripsSection.look")} link="/search" />
    </section>
  );
};
