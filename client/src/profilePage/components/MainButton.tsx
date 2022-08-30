import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../../core";
import { PageType } from "../types";

type Props = {
  pageType: PageType;
  onClick: { ban: () => void; manage: () => void };
  accountManagementMenu?: boolean;
};

export const MainButton: FC<Props> = ({
  pageType,
  onClick,
  accountManagementMenu = false,
}) => {
  const { t } = useTranslation("ProfilePage");
  const backButton = (
    <Button
      type="hollow"
      buttonType="button"
      onClick={() => {
        window.history.back();
      }}
      optionalStyling={`padding:0 15px; margin: 5%;`}
    >
      {t("mainButton.back")}
    </Button>
  );

  return pageType === "u2u" || pageType === "a2a" ? (
    backButton
  ) : pageType === "a2u" ? (
    <div>
      {backButton}
      <Button
        type="danger"
        buttonType="button"
        onClick={onClick.ban} // TODO Implement ban feature
        optionalStyling={`padding:0 15px; margin: 5%;`}
      >
        {t("mainButton.ban")}
      </Button>
    </div>
  ) : (
    // Case "up":
    <div>
      {backButton}
      <Button
        type="hollow"
        buttonType="button"
        onClick={onClick.manage}
        optionalStyling={`padding:0 15px; margin: 5%;`}
      >
        {accountManagementMenu
          ? t("mainButton.profile")
          : t("mainButton.accountManagement")}
      </Button>
    </div>
  );
};
