import { useTranslation } from "react-i18next";

import { cookiesManager, tokenService } from "../../core";
import { SlideSpec, useModal } from "../../modal";
import {
  FirstMessage,
  SecondProfilePic,
  ThirdAbout,
  FourthAllSet,
} from "./pages";

export const RegisterCompleteModalBuilder = (): SlideSpec[] => {
  const { t } = useTranslation("RegisterCompleteModal");
  const { closeModal } = useModal();

  const screens: SlideSpec[] = [
    {
      content: <FirstMessage />,
      nextButtonText: t("page.0.nextButtonText"),
      previousButtonText: t("page.0.previousButtonText"),
      previousButtonAction: () => (window.location.href = "/"),
    },
    {
      content: <SecondProfilePic />,
      message: t("page.1.message"),
      nextButtonText: t("page.1.nextButtonText"),
    },
    {
      content: <ThirdAbout />,
      nextButtonText: t("page.2.nextButtonText"),
    },
    {
      content: <FourthAllSet />,
      nextButtonText: t("page.3.nextButtonText"),
      nextButtonAction: () => {
        tokenService
          .refreshAuthToken(cookiesManager.getCookie("authToken"))
          .then((response) => {
            if (response.status === 200) {
              cookiesManager.setCookie("authToken", response.authToken, true);
            }
            closeModal();
            window.location.href = "/";
          });
      },
    },
  ];

  return screens;
};
