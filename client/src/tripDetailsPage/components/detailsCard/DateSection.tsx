/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { normalizeDate } from "../../../core";
import { useLanguage } from "../../../language";

type Props = {
  singleTrip: Date;
  frequentTrip: {
    startDate?: Date;
    endDate?: Date;
  };
};

export const DateSection: FC<Props> = ({ singleTrip, frequentTrip }) => {
  const { t } = useTranslation("TripDetailsPage");
  const { language } = useLanguage();
  return frequentTrip.startDate && frequentTrip.endDate ? (
    <Row
      css={css`
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        border-bottom: 1px solid #e6e6e6;
      `}
    >
      <span>
        {t("dateSection.from")}
        <b>{normalizeDate(frequentTrip.startDate, language, "longDate")}</b>
      </span>
      <span>
        {t("dateSection.until")}
        <b>{normalizeDate(frequentTrip.endDate, language, "longDate")}</b>
      </span>
    </Row>
  ) : (
    <Row
      css={css`
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        border-bottom: 1px solid #e6e6e6;
      `}
    >
      <span>
        <b>{normalizeDate(singleTrip, language, "longDate")}</b>
      </span>
    </Row>
  );
};
