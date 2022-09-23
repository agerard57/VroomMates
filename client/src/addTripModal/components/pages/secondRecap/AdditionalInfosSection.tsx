/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { normalizePrice } from "../../../../core";
import { useLanguage } from "../../../../language";

type Props = { freeSeats: number; totalPricePerSeat: number };

export const AdditionalInfosSection: FC<Props> = ({
  freeSeats,
  totalPricePerSeat,
}) => {
  const { t } = useTranslation("AddTripModal");

  const { language } = useLanguage();

  return (
    <Row
      css={css`
        margin-top: 1rem;
        border: 1px solid #cbcbcb;
        border-radius: 0.5rem;
        padding: 0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;
        font-weight: 600;

        .row > .col:first-of-type {
          text-align: left;
        }
        .row > .col:last-of-type {
          text-align: right;
        }
      `}
    >
      <Row>
        <Col>
          <span>
            {t("page.1.body.seatAvailableTitle", {
              count: freeSeats,
            })}
          </span>
        </Col>
        <Col>
          <span>{freeSeats}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>{t("page.1.body.frequentPrice")}</span>
        </Col>
        <Col>
          <span>{normalizePrice(totalPricePerSeat, language)}</span>
        </Col>
      </Row>
    </Row>
  );
};
