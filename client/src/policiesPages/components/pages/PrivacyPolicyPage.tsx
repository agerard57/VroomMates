import { FC } from "react";
import { useTranslation } from "react-i18next";

export const PrivacyPolicyPage: FC = () => {
  const { t } = useTranslation("PoliciesPages");

  return (
    <>
      <h2>{t("privacyPolicy.content.1.title")}</h2>
      <p>{t("privacyPolicy.content.1.content")}</p>
      <h2>{t("privacyPolicy.content.2.title")}</h2>
      <p>{t("privacyPolicy.content.2.content")}</p>
      <h2>{t("privacyPolicy.content.2.1.title")}</h2>
      <p>{t("privacyPolicy.content.2.1.content")}</p>
      <h2>{t("privacyPolicy.content.2.2.title")}</h2>
      <p>{t("privacyPolicy.content.2.2.content")}</p>
      <h2>{t("privacyPolicy.content.2.3.title")}</h2>
      <p>{t("privacyPolicy.content.2.3.content")}</p>
      <h2>{t("privacyPolicy.content.3.title")}</h2>
      <p>{t("privacyPolicy.content.3.content")}</p>
      <h2>{t("privacyPolicy.content.4.title")}</h2>
      <p>{t("privacyPolicy.content.4.content")}</p>
      <h2>{t("privacyPolicy.content.5.title")}</h2>
      <p>{t("privacyPolicy.content.5.content")}</p>
      <h2>{t("privacyPolicy.content.6.title")}</h2>
      <p>
        {t("privacyPolicy.content.6.content")}
        <a href="/policies?page=cookies">{t("privacyPolicy.content.6.link")}</a>
        .
      </p>
      <h2>{t("privacyPolicy.content.7.title")}</h2>
      <p>{t("privacyPolicy.content.7.content")}</p>
      <h2>{t("privacyPolicy.content.8.title")}</h2>
      <p>{t("privacyPolicy.content.8.content")}</p>
    </>
  );
};
