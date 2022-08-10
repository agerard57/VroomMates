import { FC } from "react";

import { DescriptionSection } from "./DescriptionSection";
import { LandingSection } from "./landingSection";
import { StatsSection } from "./statsSection";

export const LandingPage: FC = () => (
  <>
    <LandingSection />
    <DescriptionSection />
    <StatsSection />
  </>
);
