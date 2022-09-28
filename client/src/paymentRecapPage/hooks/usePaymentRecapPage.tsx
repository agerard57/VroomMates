import { useTranslation } from "react-i18next";

import { LoggedUserDataProps, usePageTitle } from "../../core";

export const usePaymentRecapPage = (
  loggedUserData: LoggedUserDataProps["loggedUserData"]
) => {
  const { t } = useTranslation("PaymentRecapPage");

  console.log(loggedUserData);
  usePageTitle(t("title"));
};
