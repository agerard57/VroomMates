/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { CalendarIcon, Inputs } from "../../../../core";
import { FirstAddProps } from "../../../types";

type Props = {
  endFrequentDateSectionProps: FirstAddProps["endFrequentDateSectionProps"];
};

export const FrequentEndDateSection: FC<Props> = ({
  endFrequentDateSectionProps,
}) => {
  const { t } = useTranslation("AddTripModal");

  const { setFrequentEndDate } = endFrequentDateSectionProps;

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
          setFrequentEndDate(e.target.value);
        }}
        isRequired
      />
    </Row>
  );
};
