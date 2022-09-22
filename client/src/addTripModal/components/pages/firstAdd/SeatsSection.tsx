/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../../../core";
import { FirstAddProps } from "../../../types";

type Props = { seatsSectionProps: FirstAddProps["seatsSectionProps"] };

export const SeatsSection: FC<Props> = ({ seatsSectionProps }) => {
  const { t } = useTranslation("AddTripModal");

  const { seatsAvailable, setSeatsAvailable } = seatsSectionProps;

  return (
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
        {t("page.0.body.seats.title")}
      </p>
      {[1, 2, 3, 4].map((seats) => (
        <Col>
          <Inputs.Radio
            inputName="seats"
            radioValue={seats.toString()}
            key={seats}
            inputPlaceholder={seats.toString()}
            activeRadio={seatsAvailable.toString()}
            onClickRadio={() => {
              setSeatsAvailable(seats);
            }}
          />
        </Col>
      ))}
    </Row>
  );
};
