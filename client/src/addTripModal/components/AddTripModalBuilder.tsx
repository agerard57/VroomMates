import { useState } from "react";
import { useTranslation } from "react-i18next";

import { SlideSpec } from "../../modal";
import { TripInputs, tripInputsInitializer } from "../interfaces";
import { FirstAdd, SecondRecap } from "./pages";

export const AddTripModalBuilder = (): SlideSpec[] => {
  const { t } = useTranslation("AddTripModal");

  const [inputs, setInputs] = useState<TripInputs>(tripInputsInitializer);

  const screens: SlideSpec[] = [
    {
      content: <FirstAdd inputs={inputs} setInputs={setInputs} />,
      nextButtonText: t("page.0.nextButtonText"),
      previousButtonText: t("page.0.previousButtonText"),
    },
    {
      content: <FirstAdd inputs={inputs} setInputs={setInputs} />,
      nextButtonText: t("page.0.nextButtonText"),
      previousButtonText: t("page.0.previousButtonText"),
    },
  ];

  return screens;
};
