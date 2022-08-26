import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Status } from "../../../core";
import { Item } from "../Item";
import { Title } from "../Title";

type Props = {
  status?: Status;
};

export const Trips: FC<Props> = ({ status }) => {
  const { t } = useTranslation("Dashboard");
  return status ? (
    <section>
      <Title title={t("tripsSection.title")} />
      <Item
        title={t("tripsSection.manageTrips")}
        link="/trips"
        color="#367FEF"
      />
    </section>
  ) : (
    <section>
      <Title title={t("tripsSection.title")} />
      <Item title={t("tripsSection.look")} link="/search" />
    </section>
  );
};
