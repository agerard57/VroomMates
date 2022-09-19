import { useTranslation } from "react-i18next";

import { SlideSpec } from "../../modal";
import { useRegisterCompleteModalBuilder } from "../hooks";
import {
  FirstMessage,
  SecondProfilePic,
  ThirdAbout,
  FourthAllSet,
} from "./pages";

export const RegisterCompleteModalBuilder = (): SlideSpec[] => {
  const { t } = useTranslation("RegisterCompleteModal");

  const { setProfilePicFilled, setAboutInputsFilled, finalPageAction } =
    useRegisterCompleteModalBuilder();

  const screens: SlideSpec[] = [
    {
      content: <FirstMessage />,
      nextButtonText: t("page.0.nextButtonText"),
      previousButtonText: t("page.0.previousButtonText"),
      previousButtonAction: () => (window.location.href = "/"),
    },
    {
      content: <SecondProfilePic setProfilePicFilled={setProfilePicFilled} />,
      message: t("page.1.message"),
      nextButtonText: t("page.1.nextButtonText"),
    },
    {
      content: <ThirdAbout setAboutInputsFilled={setAboutInputsFilled} />,
      nextButtonText: t("page.2.nextButtonText"),
    },
    {
      content: <FourthAllSet />,
      nextButtonText: t("page.3.nextButtonText"),
      nextButtonAction: finalPageAction,
    },
  ];

  return screens;
};
