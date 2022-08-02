import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Item } from "../Item";
import { Title } from "../Title";

export const Misc: FC = () => {
  const { t } = useTranslation("Dashboard");
  return (
    <section>
      <Title title={t("miscSection.title")} />
      <Item title={t("miscSection.conditions")} />
    </section>
  );
};
