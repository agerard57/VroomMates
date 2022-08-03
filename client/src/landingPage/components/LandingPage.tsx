import { FC } from "react";

import { DescriptionSection } from "./DescriptionSection";
import { StatsSection } from "./statsSection";
import { LandingSection } from "./landingSection";

export const LandingPage: FC = () => (
  <>
    <LandingSection />
    <DescriptionSection />
    <StatsSection />
  </>
);

