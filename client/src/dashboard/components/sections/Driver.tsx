import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Item } from "../Item";
import { Title } from "../Title";

type Props = {
  status: string;
};

export const Driver: FC<Props> = ({ status }) => {
  const { t } = useTranslation("Dashboard");
  if (status === "passenger")
    return (
      <section>
        <Title title={t("driverSection.title")} />
        <Item title={t("driverSection.becomeDriver")} />
      </section>
    );
  else if (status === "driver" || status === "admin")
    return (
      <section>
        <Title title={t("driverSection.title")} />
        <Item title={t("driverSection.addTrip")} />
      </section>
    );
  else return null;
};
