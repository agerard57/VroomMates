/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../../../core";
import { FirstAddProps } from "../../../types";

type Props = { typeSectionProps: FirstAddProps["typeSectionProps"] };

export const TypeSection: FC<Props> = ({ typeSectionProps }) => {
  const { t } = useTranslation("AddTripModal");

  const { typeChecked, setTypeChecked } = typeSectionProps;

  return (
    <Row>
      <Col>
        <Inputs.Radio
          inputName="type"
          radioValue="single"
          inputPlaceholder={t("page.0.body.type.single")}
          activeRadio={typeChecked}
          onClickRadio={() => setTypeChecked("single")}
        />
      </Col>
      <Col>
        <Inputs.Radio
          inputName="type"
          radioValue="frequent"
          inputPlaceholder={t("page.0.body.type.frequent")}
          activeRadio={typeChecked}
          onClickRadio={() => setTypeChecked("frequent")}
        />
      </Col>
    </Row>
  );
};
