/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent, FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../../../core";

type Props = {
  name: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = ({ name, handleInputChange }) => {
  const { t } = useTranslation("BecomeDriverModal");

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
        {t(`page.2.${name}.title`)}
      </p>
      <Inputs.Text
        inputName={name}
        inputPlaceholder={t(`page.2.${name}.placeholder`)}
        onChange={handleInputChange}
        isRequired
      />
    </Row>
  );
};
