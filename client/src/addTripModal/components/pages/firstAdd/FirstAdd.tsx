/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, FC, SetStateAction } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useFirstAdd } from "../../../hooks";
import { TripInputs } from "../../../interfaces";
import { DaysSection } from "./DaysSection";
import { FrequentEndDateSection } from "./FrequentEndDateSection";
import { FrequentStartDateSection } from "./FrequentStartDateSection";
import { MapSection } from "./MapSection";
import { SeatsSection } from "./SeatsSection";
import { TypeSection } from "./TypeSection";

type Props = {
  inputs: TripInputs;
  setInputs: Dispatch<SetStateAction<TripInputs>>;
};

export const FirstAdd: FC<Props> = ({ inputs, setInputs }) => {
  const { t } = useTranslation("AddTripModal");

  const {
    typeSectionProps,
    startFrequentDateSectionProps,
    endFrequentDateSectionProps,
    daysSectionProps,
    mapSectionProps,
    seatsSectionProps,
  } = useFirstAdd(inputs, setInputs);

  return (
    <Container
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <Row>
        <h1
          css={css`
            font-weight: 700;
            color: #3d3d3d;
          `}
        >
          {t("title")}
        </h1>
        <p
          css={css`
            color: #636363;
            font-size: 1.1rem;
            text-align: center;
          `}
        >
          {t("page.0.subtitle")}
        </p>
      </Row>
      <Row>
        <form>
          <TypeSection typeSectionProps={typeSectionProps} />
          <FrequentStartDateSection
            startFrequentDateSectionProps={startFrequentDateSectionProps}
          />
          <FrequentEndDateSection
            endFrequentDateSectionProps={endFrequentDateSectionProps}
          />
          <DaysSection daysSectionProps={daysSectionProps} />
          <MapSection mapSectionProps={mapSectionProps} />
          <SeatsSection seatsSectionProps={seatsSectionProps} />
        </form>
      </Row>
    </Container>
  );
};
