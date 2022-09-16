import { useTranslation } from "react-i18next";

import { SlideSpec } from "../../modal";
import {
  FirstMessagePage,
  SecondProfilePic,
  ThirdAbout,
  FourthAllSet,
} from "./pages";

export const RegisterCompleteModalBuilder = (): SlideSpec[] => {
  const { t } = useTranslation("RegisterCompleteModal");

  const screens = [
    {
      content: <FirstMessagePage />,
      nextButtonText: t("page.0.nextButtonText"),
      previousButtonText: t("page.0.previousButtonText"),
    },
    {
      content: <SecondProfilePic />,
      message: t("page.1.message"),
      nextButtonText: t("page.1.nextButtonText"),
      previousButtonText: t("page.1.previousButtonText"),
    },
    {
      content: <ThirdAbout />,
      nextButtonText: t("page.2.nextButtonText"),
      previousButtonText: t("page.2.previousButtonText"),
    },
    {
      content: <FourthAllSet />,
      nextButtonText: t("page.3.nextButtonText"),
    },
  ];

  return screens;
};
