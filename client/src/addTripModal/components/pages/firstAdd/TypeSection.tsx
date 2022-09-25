/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../../../core";
import { FirstAddProps } from "../../../types";

export const TypeSection: FC<FirstAddProps> = ({ inputs, setInputs }) => {
  const { t } = useTranslation("AddTripModal");

  return (
    <Row>
      <Col>
        <Inputs.Radio
          inputName="type"
          radioValue="single"
          inputPlaceholder={t("page.0.body.type.single")}
          activeRadio={inputs.type}
          onClickRadio={() =>
            setInputs((prev) => ({ ...prev, type: "single" }))
          }
        />
      </Col>
      <Col>
        <Inputs.Radio
          inputName="type"
          radioValue="frequent"
          inputPlaceholder={t("page.0.body.type.frequent")}
          activeRadio={inputs.type}
          onClickRadio={() =>
            setInputs((prev) => ({ ...prev, type: "frequent" }))
          }
        />
      </Col>
    </Row>
  );
};
