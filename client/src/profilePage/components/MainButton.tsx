/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../core";
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
    <Inputs.Button
      type="hollow"
      buttonType="button"
      onClick={() => {
        window.history.back();
      }}
      optionalStyling={css`
        padding: 0 15px;
        margin: 5%;
      `}
    >
      {t("mainButton.back")}
    </Inputs.Button>
  );

  return (
    <div>
      {backButton}
      {
        // Case "a2u":
        pageType === "a2u" ? (
          <Inputs.Button
            type="danger"
            buttonType="button"
            onClick={onClick.ban}
            optionalStyling={css`
              padding: 0 15px;
              margin: 5%;
            `}
          >
            {t("mainButton.ban")}
          </Inputs.Button>
        ) : // Case "a2b":
        pageType === "a2b" ? (
          <Inputs.Button
            type="danger"
            buttonType="button"
            onClick={onClick.ban}
            optionalStyling={css`
              padding: 0 15px;
              margin: 5%;
            `}
          >
            {t("mainButton.unBan")}
          </Inputs.Button>
        ) : pageType === "up" ? (
          // Case "up":
          <Inputs.Button
            type="hollow"
            buttonType="button"
            onClick={onClick.manage}
            optionalStyling={css`
              padding: 0 15px;
              margin: 5%;
            `}
          >
            {accountManagementMenu
              ? t("mainButton.profile")
              : t("mainButton.accountManagement")}
          </Inputs.Button>
        ) : null
      }
    </div>
  );
};
