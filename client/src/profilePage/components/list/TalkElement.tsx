import { FC } from "react";
import { useTranslation } from "react-i18next";

import { TalkIcon } from "../../../core";
import { ElementTemplate } from "./ElementTemplate";

type Props = {
  talk: boolean;
};

export const TalkElement: FC<Props> = ({ talk }) => {
  const { t } = useTranslation("ProfilePage");

  return talk ? (
    <ElementTemplate
      icon={{ src: TalkIcon, alt: "mic icon on", active: true }}
      content={t("list.talk.true")}
    />
  ) : (
    <ElementTemplate
      icon={{ src: TalkIcon, alt: "mic icon off", active: false }}
      content={t("list.talk.false")}
    />
  );
};
