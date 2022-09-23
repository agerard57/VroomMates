import { useTranslation } from "react-i18next";

import { SlideSpec } from "../../modal";
import { useAddTripModalBuilder } from "../hooks";
import { FirstAdd, SecondRecap } from "./pages";

export const AddTripModalBuilder = (): SlideSpec[] => {
  const { t } = useTranslation("AddTripModal");

  const { setTripInputsFilled } = useAddTripModalBuilder();

  const screens: SlideSpec[] = [
    {
      content: <FirstAdd setTripInputsFilled={setTripInputsFilled} />,
      nextButtonText: t("page.0.nextButtonText"),
      previousButtonText: t("page.0.previousButtonText"),
    },
    {
      content: <SecondRecap />,
      nextButtonText: t("page.1.nextButtonText"),
    },
  ];

  return screens;
};
