/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../..";
import { CalendarIcon } from "../../../core";
import { ArrivalIcon, DepartureIcon } from "../../assets";
import { SearchBoxTypes } from "../../types";

export const OpenedSearchBox: FC<SearchBoxTypes["OpenedSearchBox"]> = ({
  canClose,
  searchInputs,
  setSearchInputs,
}) => {
  const { t } = useTranslation("Core");

  return (
    <div
      css={css`
        .row {
          margin-bottom: 10px;
        }
      `}
    >
      {!canClose && (
        <>
          <h2
            css={css`
              font-family: "Baloo2";
              font-weight: 500;
              text-align: center;
            `}
          >
            {t("searchBox.title")}
          </h2>
          <hr />
        </>
      )}
      <Row
        css={css`
          align-items: center;
          flex-direction: row;
          flex-wrap: nowrap;
        `}
      >
        <Col>
          <Inputs.Radio
            inputName="type"
            radioValue="single"
            inputPlaceholder={t("searchBox.tripType.singleTrip")}
            activeRadio={searchInputs.type}
            onClickRadio={() => {
              setSearchInputs({
                ...searchInputs,
                type: "single",
              });
            }}
          />
        </Col>
        <Col>
          <Inputs.Radio
            inputName="type"
            radioValue="frequent"
            inputPlaceholder={t("searchBox.tripType.frequentTrip")}
            activeRadio={searchInputs.type}
            onClickRadio={() => {
              setSearchInputs({
                ...searchInputs,
                type: "frequent",
              });
            }}
          />
        </Col>
      </Row>
      <Row>
        <Inputs.Text
          inputName="departureLocation"
          inputPlaceholder={t("searchBox.tripPoints.from")}
          icon={DepartureIcon}
          value={searchInputs.departureLocation}
          onChange={(e) => {
            setSearchInputs({
              ...searchInputs,
              departureLocation: e.target.value,
            });
          }}
        />
      </Row>
      <Row>
        <Inputs.Text
          inputName="arrivalLocation"
          inputPlaceholder={t("searchBox.tripPoints.getTo")}
          icon={ArrivalIcon}
          value={searchInputs.arrivalLocation}
          onChange={(e) => {
            setSearchInputs({
              ...searchInputs,
              arrivalLocation: e.target.value,
            });
          }}
        />
      </Row>
      <Row>
        <Inputs.Date
          inputName="date"
          inputPlaceholder={t("searchBox.date")}
          icon={CalendarIcon}
          value={searchInputs.date}
          onChange={(e) => {
            setSearchInputs({
              ...searchInputs,
              date: e.target.value,
            });
          }}
        />
      </Row>
      <Row>
        <Inputs.Button
          type="primary"
          buttonType="submit"
          optionalStyling={css`
            margin-top: 10px;
          `}
          disabled={
            searchInputs.type === "" ||
            !searchInputs.departureLocation ||
            !searchInputs.arrivalLocation ||
            !searchInputs.date
          }
        >
          {t("searchBox.searchButton")}
        </Inputs.Button>
      </Row>
    </div>
  );
};
