/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../../../core";
import { useThirdCar } from "../../../hooks";

export const ColorInput: FC = () => {
  const { t } = useTranslation("BecomeDriverModal");

  const { handleInputChange } = useThirdCar();

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
        {t("page.2.color.title")}
      </p>
      <Inputs.Text
        inputName="color"
        inputPlaceholder={t("page.2.color.placeholder")}
        onChange={handleInputChange}
        isRequired
      />
    </Row>
  );
};
