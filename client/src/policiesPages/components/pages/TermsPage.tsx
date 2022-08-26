import { FC } from "react";
import { useTranslation } from "react-i18next";

export const TermsPage: FC = () => {
  const { t } = useTranslation("PoliciesPages");

  return (
    <>
      <h2>{t("termsAndConditions.content.1.title")}</h2>
      <p>{t("termsAndConditions.content.1.content")}</p>
      <h2>{t("termsAndConditions.content.2.title")}</h2>
      <h2>{t("termsAndConditions.content.2.1.title")}</h2>
      <p>{t("termsAndConditions.content.2.1.content")}</p>
      <h2>{t("termsAndConditions.content.2.2.title")}</h2>
      <p>{t("termsAndConditions.content.2.2.content")}</p>
      <h2>{t("termsAndConditions.content.2.3.title")}</h2>
      <p>{t("termsAndConditions.content.2.3.content")}</p>
      <h2>{t("termsAndConditions.content.3.title")}</h2>
      <h2>{t("termsAndConditions.content.3.1.title")}</h2>
      <p>{t("termsAndConditions.content.3.1.content")}</p>
      <h2>{t("termsAndConditions.content.3.2.title")}</h2>
      <p>{t("termsAndConditions.content.3.2.content")}</p>
      <h2>{t("termsAndConditions.content.3.3.title")}</h2>
      <h2>{t("termsAndConditions.content.3.3.1.title")}</h2>
      <p>{t("termsAndConditions.content.3.3.1.content")}</p>
      <h2>{t("termsAndConditions.content.3.3.2.title")}</h2>
      <p>{t("termsAndConditions.content.3.3.2.content")}</p>
      <h2>{t("termsAndConditions.content.4.title")}</h2>
      <p>{t("termsAndConditions.content.4.content")}</p>
      <h2>{t("termsAndConditions.content.4.title")}</h2>
      <p>{t("termsAndConditions.content.4.content")}</p>
      <h2>{t("termsAndConditions.content.4.1.title")}</h2>
      <p>{t("termsAndConditions.content.4.1.content")}</p>
      <h2>{t("termsAndConditions.content.4.2.title")}</h2>
      <p>{t("termsAndConditions.content.4.2.content")}</p>
      <h2>{t("termsAndConditions.content.4.3.title")}</h2>
      <p>{t("termsAndConditions.content.4.3.content")}</p>
      <h2>{t("termsAndConditions.content.5.title")}</h2>
      <p>{t("termsAndConditions.content.5.content")}</p>
      <h2>{t("termsAndConditions.content.6.title")}</h2>
      <h2>{t("termsAndConditions.content.6.1.title")}</h2>
      <p>{t("termsAndConditions.content.6.1.content")}</p>
      <h2>{t("termsAndConditions.content.6.2.title")}</h2>
      <p>{t("termsAndConditions.content.6.2.content")}</p>
      <h2>{t("termsAndConditions.content.6.3.title")}</h2>
      <p>{t("termsAndConditions.content.6.3.content")}</p>
      <h2>{t("termsAndConditions.content.7.title")}</h2>
      <p>{t("termsAndConditions.content.7.content")}</p>
      <h2>{t("termsAndConditions.content.8.title")}</h2>
      <p>{t("termsAndConditions.content.8.content")}</p>
      <h2>{t("termsAndConditions.content.9.title")}</h2>
      <h2>{t("termsAndConditions.content.9.1.title")}</h2>
      <p>{t("termsAndConditions.content.9.1.content")}</p>
      <h2>{t("termsAndConditions.content.9.2.title")}</h2>
      <p>{t("termsAndConditions.content.9.2.content")}</p>
      <h2>{t("termsAndConditions.content.10.title")}</h2>
      <p>{t("termsAndConditions.content.10.content")}</p>
    </>
  );
};
