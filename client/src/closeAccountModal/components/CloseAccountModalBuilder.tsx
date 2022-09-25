import { useTranslation } from "react-i18next";

import { logout } from "../../core";
import { SlideSpec } from "../../modal";
import { FirstDelete, SecondGoodbye } from "./pages";

export const CloseAccountModalBuilder = (): SlideSpec[] => {
  const { t } = useTranslation("CloseAccountModal");

  const screens: SlideSpec[] = [
    {
      content: <FirstDelete />,
      nextButtonText: t("page.0.nextButtonText"),
      previousButtonText: t("page.0.previousButtonText"),
      message: t("page.0.message"),
    },
    {
      content: <SecondGoodbye />,
      nextButtonText: t("page.1.nextButtonText"),
      nextButtonAction: () => logout(),
    },
  ];

  return screens;
};
