/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { normalizeDate } from "../../../core";
import { useLanguage } from "../../../language";

type Props = {
  departureDate: Date;
  frequent: { from?: Date; to?: Date };
};

export const DateSection: FC<Props> = ({ departureDate, frequent }) => {
  const { t } = useTranslation("TripsPage");

  const { language } = useLanguage();
  return frequent.from && frequent.to ? (
    <Row>
      <Col
        css={css`
          text-align: left;
        `}
      >
        {t("trip.from", {
          date: normalizeDate(frequent.from, language, "longDate"),
        })}
        <br />
        {t("trip.to", {
          date: normalizeDate(frequent.to, language, "longDate"),
        })}
      </Col>
    </Row>
  ) : (
    <Row>
      <Col
        css={css`
          text-align: left;
        `}
      >
        {normalizeDate(departureDate, language, "longDate")}
      </Col>
    </Row>
  );
};
