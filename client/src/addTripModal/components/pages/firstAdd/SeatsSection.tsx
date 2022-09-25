/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../../../core";
import { FirstAddProps } from "../../../types";

export const SeatsSection: FC<FirstAddProps> = ({ inputs, setInputs }) => {
  const { t } = useTranslation("AddTripModal");

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
        <Col key={seats}>
          <Inputs.Radio
            inputName="seats"
            radioValue={seats.toString()}
            inputPlaceholder={seats.toString()}
            activeRadio={inputs.free_seats.toString()}
            onClickRadio={() => {
              setInputs({
                ...inputs,
                free_seats: seats,
              });
            }}
          />
        </Col>
      ))}
    </Row>
  );
};
