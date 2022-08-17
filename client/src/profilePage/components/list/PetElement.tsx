import { FC } from "react";
import { useTranslation } from "react-i18next";

import PetIcon from "../../assets/petIcon.svg";
import { ElementTemplate } from "./ElementTemplate";

type Props = {
  pet: boolean;
};

export const PetElement: FC<Props> = ({ pet }) => {
  const { t } = useTranslation("ProfilePage");

  return pet ? (
    <ElementTemplate
      icon={{ src: PetIcon, alt: "pet icon on", active: true }}
      content={t("list.pet.true")}
    />
  ) : (
    <ElementTemplate
      icon={{ src: PetIcon, alt: "pet icon off", active: false }}
      content={t("list.pet.false")}
    />
  );
};
