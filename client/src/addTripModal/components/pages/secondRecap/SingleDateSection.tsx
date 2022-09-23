/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { normalizeDate } from "../../../../core";
import { useLanguage } from "../../../../language";

type Props = {
  startDate: string;
};

export const SingleDateSection: FC<Props> = ({ startDate }) => {
  const { t } = useTranslation("AddTripModal");

  const { language } = useLanguage();

  return (
    <Row>
      <span>{t("page.1.body.singlePlannedTitle")}</span>
      <span
        css={css`
          font-size: 0.9rem;
          b {
            font-weight: 600;
          }
        `}
      >
        <b>{normalizeDate(new Date(startDate), language, "shortDate")}</b>
      </span>
    </Row>
  );
};
