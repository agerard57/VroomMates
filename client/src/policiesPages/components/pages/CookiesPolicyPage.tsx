import { FC } from "react";
import { useTranslation } from "react-i18next";

export const CookiesPolicyPage: FC = () => {
  const { t } = useTranslation("PoliciesPages");

  return (
    <>
      <p>{t("cookies.content.content")}</p>
      <h2>{t("cookies.content.1.title")}</h2>
      <p>{t("cookies.content.1.content")}</p>
      <h2>{t("cookies.content.2.title")}</h2>
      <p>{t("cookies.content.2.content")}</p>
      <h2>{t("cookies.content.3.title")}</h2>
      <p>{t("cookies.content.3.content")}</p>
    </>
  );
};
