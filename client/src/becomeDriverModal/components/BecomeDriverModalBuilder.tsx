import { useTranslation } from "react-i18next";

import { SlideSpec } from "../../modal";
import { useBecomeDriverModalBuilder } from "../hooks";
import {
  FirstMessage,
  FourthAllSet,
  SecondDriverLicense,
  ThirdCar,
} from "./pages";

export const BecomeDriverModalBuilder = (): SlideSpec[] => {
  const { t } = useTranslation("BecomeDriverModal");

  const { setDriverLicenseFilled, setCarInputsFilled, userAlreadyRequested } =
    useBecomeDriverModalBuilder();

  const screens: SlideSpec[] = !userAlreadyRequested
    ? [
        {
          content: <FirstMessage />,
          nextButtonText: t("page.0.nextButtonText"),
          previousButtonText: t("page.0.previousButtonText"),
        },
        {
          content: (
            <SecondDriverLicense
              setDriverLicenseFilled={setDriverLicenseFilled}
            />
          ),
          nextButtonText: t("page.1.nextButtonText"),
          message: t("page.1.message"),
        },
        {
          content: <ThirdCar setCarInputsFilled={setCarInputsFilled} />,
          nextButtonText: t("page.2.nextButtonText"),
        },
        {
          content: <FourthAllSet />,
          nextButtonText: t("page.3.nextButtonText"),
        },
      ]
    : [
        {
          content: <FourthAllSet />,
          nextButtonText: t("page.3.nextButtonText"),
        },
      ];
  return screens;
};
