import { FC } from "react";
import { useTranslation } from "react-i18next";

import { MusicIcon } from "../../../core";
import { ElementTemplate } from "./ElementTemplate";

type Props = {
  music: boolean;
};

export const MusicElement: FC<Props> = ({ music }) => {
  const { t } = useTranslation("ProfilePage");

  return music ? (
    <ElementTemplate
      icon={{ src: MusicIcon, alt: "music on icon", active: true }}
      content={t("list.music.true")}
    />
  ) : (
    <ElementTemplate
      icon={{ src: MusicIcon, alt: "music off icon", active: false }}
      content={t("list.music.false")}
    />
  );
};
