/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { CalendarIcon, Inputs } from "../../../../core";
import { SetInputProp } from "../../../types";

export const FrequentStartDateSection: FC<SetInputProp> = ({ setInputs }) => {
  const { t } = useTranslation("AddTripModal");

  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    if (date && time) {
      setInputs((prev) => ({
        ...prev,
        departure: {
          ...prev.departure,
          time: `${date}T${time}`,
        },
        frequent_trip_options: {
          ...prev.frequent_trip_options,
          start_date: `${date}T${time}`,
        },
      }));
    }
  }, [date, time, setInputs]);

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
            setDate(e.target.value);
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
          onChange={(e) => setTime(e.target.value)}
          isRequired
        />
      </div>
    </>
  );
};
