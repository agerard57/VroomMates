import { useState } from "react";
import { useTranslation } from "react-i18next";

import { SlideSpec, useModal } from "../../modal";
import {
  FirstMessage,
  FourthAllSet,
  SecondDriverLicense,
  ThirdCar,
} from "./pages";

export const BecomeDriverModalBuilder = (): SlideSpec[] => {
  const { t } = useTranslation("BecomeDriverModal");

  const { setIsDisabled, iterator } = useModal();
  const { slideNumber } = iterator;

  const [driverLicenseFilled, setDriverLicenseFilled] = useState(false);
  const [carInputsFilled, setCarInputsFilled] = useState(false);

  setIsDisabled(
    (slideNumber === 1 && !driverLicenseFilled) ||
      (slideNumber === 2 && !carInputsFilled)
  );

  const screens: SlideSpec[] = [
    {
      content: <FirstMessage />,
      nextButtonText: t("page.0.nextButtonText"),
      previousButtonText: t("page.0.previousButtonText"),
    },
    {
      content: (
        <SecondDriverLicense
          driverLicenseFilled={driverLicenseFilled}
          setDriverLicenseFilled={setDriverLicenseFilled}
        />
      ),
      nextButtonText: t("page.1.nextButtonText"),
      message: t("page.1.message"),
    },
    {
      content: (
        <ThirdCar
          carInputsFilled={carInputsFilled}
          setCarInputsFilled={setCarInputsFilled}
        />
      ),
      nextButtonText: t("page.2.nextButtonText"),
    },
    {
      content: <FourthAllSet />,
      nextButtonText: t("page.3.nextButtonText"),
    },
  ];

  return screens;
};
