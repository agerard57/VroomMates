/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../../../core";
import { useThirdAbout } from "../../../hooks";

export const BioSection: FC = () => {
  const { t } = useTranslation("RegisterCompleteModal");

  const { inputs, handleInputChange } = useThirdAbout();

  return (
    <Row>
      <Col>
        <p
          css={css`
            color: #636363;
            padding-top: 1rem;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0.5rem;
          `}
        >
          {t("page.2.bio.title")}
        </p>
      </Col>
      <Col>
        <p
          css={css`
            color: #949494;
            padding-top: 1rem;
            text-align: right;
            font-weight: 500;
            font-size: 0.7rem;
            margin-bottom: 0.2rem;
          `}
        >
          {inputs.bio.length} / 200
        </p>
      </Col>
      <Inputs.TextArea
        inputName="bio"
        inputPlaceholder={t("page.2.bio.placeholder")}
        onChange={handleInputChange}
        length={{ max: 200 }}
        isRequired
      />
    </Row>
  );
};
