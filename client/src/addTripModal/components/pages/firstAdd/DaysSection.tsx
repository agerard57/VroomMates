/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useDaysDisplay, Inputs } from "../../../../core";
import { FirstAddProps } from "../../../types";

type Props = { daysSectionProps: FirstAddProps["daysSectionProps"] };

export const DaysSection: FC<Props> = ({ daysSectionProps }) => {
  const { t } = useTranslation("AddTripModal");

  const { daysArray } = useDaysDisplay();

  const { days, setDays } = daysSectionProps;

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
        {t("page.0.body.frequency.title")}
      </p>
      <Row
        css={css`
          width: -webkit-fill-available;
          display: block;
        `}
      >
        {daysArray.map((day, index) => (
          <span
            key={index}
            css={css`
              padding: 0.2rem;
              width: auto;
              text-align: center;
              align-items: center;

              span {
                padding: 0.2rem 2rem;
              }
            `}
          >
            <Inputs.CheckboxButton
              inputName={day}
              inputPlaceholder={day}
              onClickCheckbox={() => {
                if (days?.includes(index)) {
                  setDays(days.filter((day) => day !== index));
                } else {
                  setDays([...(days || []), index]);
                }
              }}
            />
          </span>
        ))}
      </Row>
    </Row>
  );
};
