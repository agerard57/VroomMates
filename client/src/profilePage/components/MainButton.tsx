import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../../core";

export const MainButton: FC = () => {
  const { t } = useTranslation("ProfilePage");

  return (
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
};
