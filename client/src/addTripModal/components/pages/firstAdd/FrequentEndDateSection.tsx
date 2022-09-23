/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { CalendarIcon, Inputs } from "../../../../core";
import { SetInputProp } from "../../../types";

export const FrequentEndDateSection: FC<SetInputProp> = ({ setInputs }) => {
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
        {t("page.0.body.date.frequentEndTitle")}
      </p>
      <Inputs.Date
        inputName="frequentEnd"
        icon={CalendarIcon}
        onChange={(e) => {
          setInputs((prev) => ({
            ...prev,
            frequent_trip_options: {
              ...prev.frequent_trip_options,
              end_date: e.target.value,
            },
          }));
        }}
        isRequired
      />
    </Row>
  );
};
