/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { normalizeDate, useDaysDisplay } from "../../../../core";
import { useLanguage } from "../../../../language";
import { TripInputs } from "../../../interfaces";

type Props = {
  frequentTripOptions: TripInputs["frequent_trip_options"];
};

export const FrequentDateSection: FC<Props> = ({ frequentTripOptions }) => {
  const { t } = useTranslation("AddTripModal");

  const { language } = useLanguage();

  const { displayDays } = useDaysDisplay(frequentTripOptions.day_of_week);

  return (
    <Row>
      <span>{t("page.1.body.frequentPlannedTitle")}</span>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          border: 1px solid #e5e5e5;
          margin: 0.5rem 0;
        `}
      >
        {displayDays}
      </div>
      <span
        css={css`
          font-size: 0.9rem;
          b {
            font-weight: 600;
          }
        `}
      >
        {t("page.1.body.from")}
        <b>
          {" "}
          {normalizeDate(
            new Date(frequentTripOptions.start_date),
            language,
            "shortDate"
          )}{" "}
        </b>
        {t("page.1.body.to")}
        <b>
          {" "}
          {normalizeDate(
            new Date(frequentTripOptions.end_date),
            language,
            "shortDate"
          )}{" "}
        </b>
      </span>
    </Row>
  );
};
