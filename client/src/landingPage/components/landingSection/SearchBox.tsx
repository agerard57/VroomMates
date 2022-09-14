/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { RoundedContour, useGeolocation, Inputs } from "../../../core";
import arrivalIcon from "../../assets/icons/arrivalIcon.svg";
import calendarIcon from "../../assets/icons/calendarIcon.svg";
import departureIcon from "../../assets/icons/departureIcon.svg";

export const SearchBox: FC = () => {
  const { t } = useTranslation("LandingPage");
  const { address } = useGeolocation();

  const [activeRadio, setActiveRadio] = useState<string>("single");
  return (
    <form
      action="/search"
      css={css`
        margin: 5vw;
      `}
    >
      <RoundedContour>
        <div
          css={css`
            .row {
              margin-bottom: 10px;
            }
          `}
        >
          <h2
            css={css`
              font-family: "Baloo2";
              font-weight: 500;
              text-align: center;
            `}
          >
            {t("landingSection.search.title")}
          </h2>
          <hr />
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
                inputPlaceholder={t(
                  "landingSection.search.tripType.singleTrip"
                )}
                activeRadio={activeRadio}
                onClickRadio={() => {
                  setActiveRadio("single");
                }}
              />
            </Col>
            <Col>
              <Inputs.Radio
                inputName="type"
                radioValue="frequent"
                inputPlaceholder={t(
                  "landingSection.search.tripType.frequentTrip"
                )}
                activeRadio={activeRadio}
                onClickRadio={() => {
                  setActiveRadio("frequent");
                }}
              />
            </Col>
          </Row>
          <Row>
            <Inputs.Text
              inputName="departureLocation"
              inputPlaceholder={t("landingSection.search.tripPoints.from")}
              inputValue={address}
              icon={departureIcon}
            />
          </Row>
          <Row>
            <Inputs.Text
              inputName="arrivalLocation"
              inputPlaceholder={t("landingSection.search.tripPoints.getTo")}
              icon={arrivalIcon}
            />
          </Row>
          <Row>
            <Inputs.Date
              inputName="date"
              inputPlaceholder={t("landingSection.search.date")}
              icon={calendarIcon}
            />
          </Row>
          <Row>
            <Inputs.Button
              type="primary"
              buttonType="submit"
              optionalStyling={`margin-top:10px`}
            >
              {t("landingSection.search.searchButton")}
            </Inputs.Button>
          </Row>
        </div>
      </RoundedContour>
    </form>
  );
};
