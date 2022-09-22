/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { CalendarIcon, Inputs } from "../../../../core";
import { FirstAddProps } from "../../../types";

type Props = {
  startFrequentDateSectionProps: FirstAddProps["startFrequentDateSectionProps"];
};

export const FrequentStartDateSection: FC<Props> = ({
  startFrequentDateSectionProps,
}) => {
  const { t } = useTranslation("AddTripModal");

  const { setFrequentStartDate, setFrequentStartTime } =
    startFrequentDateSectionProps;

  return (
    <>
      <Row>
        <p
          css={css`
            color: #636363;
            padding-top: 1rem;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0.5rem;
          `}
        >
          {t("page.0.body.date.frequentStartTitle")}
        </p>
        <Inputs.Date
          inputName="departureDate"
          icon={CalendarIcon}
          onChange={(e) => {
            setFrequentStartDate(e.target.value);
          }}
          isRequired
        />
      </Row>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          margin: 1rem;
        `}
      >
        <span
          css={css`
            font-weight: 600;
            padding-right: 1rem;
          `}
        >
          {t("page.0.body.date.at")}
        </span>
        <Inputs.Time
          inputName="departureTime"
          onChange={(e) => setFrequentStartTime(e.target.value)}
          isRequired
        />
      </div>
    </>
  );
};
