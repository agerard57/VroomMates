/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import {
  RoundedContour,
  Button,
  useGeolocation,
  RadioInput,
  TextInput,
  DateInput,
} from "../../../core";
import arrivalIcon from "../../assets/icons/arrivalIcon.svg";
import calendarIcon from "../../assets/icons/calendarIcon.svg";
import departureIcon from "../../assets/icons/departureIcon.svg";

export const SearchBox: FC = () => {
  const { t } = useTranslation("LandingPage");
  const { address } = useGeolocation();

  return (
    <form
      action="/search"
      css={css`
        margin: 5vw;
      `}
    >
      <RoundedContour>
        <div>
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
          <Row>
            <Col>
              <RadioInput
                inputName="type"
                radioValue="single"
                inputPlaceholder={t(
                  "landingSection.search.tripType.singleTrip"
                )}
              />
            </Col>
            <Col>
              <span>{t("landingSection.search.tripType.or")}</span>
            </Col>
            <Col>
              <RadioInput
                inputName="type"
                radioValue="frequent"
                inputPlaceholder={t(
                  "landingSection.search.tripType.frequentTrip"
                )}
              />
            </Col>
          </Row>
          <Row>
            <TextInput
              inputName="departureLocation"
              inputPlaceholder={t("landingSection.search.tripPoints.from")}
              inputValue={address}
              icon={departureIcon}
            />
          </Row>
          <Row>
            <span>{t("landingSection.search.tripPoints.to")}</span>
          </Row>
          <Row>
            <TextInput
              inputName="arrivalLocation"
              inputPlaceholder={t("landingSection.search.tripPoints.getTo")}
              icon={arrivalIcon}
            />
          </Row>
          <Row>
            <DateInput
              inputName="date"
              inputPlaceholder={t("landingSection.search.date")}
              icon={calendarIcon}
            />
          </Row>
          <Row>
            <Button type="primary" buttonType="submit">
              {t("landingSection.search.searchButton")}
            </Button>
          </Row>
        </div>
      </RoundedContour>
    </form>
  );
};
