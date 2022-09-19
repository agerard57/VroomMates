/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import { normalizeDate } from "../..";
import { useLanguage } from "../../../language";
import { SearchBoxStyles } from "../../styles";
import { SearchBoxTypes } from "../../types";

export const ClosedSearchBox: FC<SearchBoxTypes["ClosedSearchBox"]> = ({
  searchInputs,
}) => {
  const { language } = useLanguage();

  return (
    <div css={SearchBoxStyles.closedBox}>
      <Col xs={5}>
        <Row>{searchInputs.departureLocation}</Row>
        <Row>{searchInputs.type}</Row>
      </Col>
      <Col xs={2}>→</Col>
      <Col xs={5}>
        <Row>{searchInputs.arrivalLocation}</Row>
        <Row>{normalizeDate(searchInputs.date, language, "shortDate")}</Row>
      </Col>
    </div>
  );
};
