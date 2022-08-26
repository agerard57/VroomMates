/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { SelectInput } from "../../core";
import { usePoliciesPages } from "../hooks";
import { CookiesPolicyPage, TermsPage, PrivacyPolicyPage } from "./pages";

export const PoliciesPages: FC = () => {
  const { t } = useTranslation("PoliciesPages");

  const { value, handleChange } = usePoliciesPages();

  return (
    <Container
      css={css`
        padding: 5vw;
        white-space: pre-wrap;
      `}
    >
      <h1>{t("title")}</h1>
      <div
        css={css`
          text-align: justify;
          font-size: 0.8rem;
          h2 {
            font-size: 0.8rem;
            padding: 10px 0;
          }
        `}
      >
        <SelectInput onChange={handleChange} title="pageSelection">
          <option
            value="termsAndConditions"
            selected={"termsAndConditions" === value}
          >
            {t("termsAndConditions.title")}
          </option>
          <option value="privacyPolicy" selected={"privacyPolicy" === value}>
            {t("privacyPolicy.title")}
          </option>
          <option value="cookies" selected={"cookies" === value}>
            {t("cookies.title")}
          </option>
        </SelectInput>
        {value === "termsAndConditions" && <TermsPage />}
        {value === "privacyPolicy" && <PrivacyPolicyPage />}
        {value === "cookies" && <CookiesPolicyPage />}
        {/* TODO Add go up button */}
      </div>
    </Container>
  );
};
