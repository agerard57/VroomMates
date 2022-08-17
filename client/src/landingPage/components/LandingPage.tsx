import { FC } from "react";
import { useTranslation } from "react-i18next";

import { usePageTitle } from "../../core";
import { DescriptionSection } from "./DescriptionSection";
import { LandingSection } from "./landingSection";
import { StatsSection } from "./statsSection";

export const LandingPage: FC = () => {
  const { t } = useTranslation("LandingPage");

  usePageTitle(t("title"));

  return (
    <>
      <LandingSection />
      <DescriptionSection />
      <StatsSection />
    </>
  );
};
