/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Inputs, ProfilePic } from "../../../core";
import { CarIcon } from "../../assets";
import { Driver } from "../../interfaces";

type Props = {
  tripId: string;
  driver: Driver;
  car: Driver["car"];
};

export const DriverSection: FC<Props> = ({ tripId, driver, car }) => {
  const { t } = useTranslation("TripDetailsPage");

  const navigate = useNavigate();

  return (
    <Row
      css={css`
        margin-bottom: 10px;
      `}
    >
      <Row
        css={css`
          flex-direction: row;
          flex-wrap: nowrap;
          white-space: nowrap;
          text-align: left;
        `}
      >
        <Col>
          <span
            css={css`
              font-weight: 700;
              font-size: 1.2rem;
            `}
          >
            {driver.first_name}{" "}
          </span>
          <span
            css={css`
              font-weight: 600;
              font-size: 0.87rem;
            `}
          >
            {" "}
            -{" "}
            {t("driverSection.ratings", {
              nbRatings: driver.nbRatings,
              s: driver.nbRatings === 0 || driver.nbRatings === 1 ? "" : "s",
            })}
          </span>
          <Row
            css={css`
              flex-direction: row;
              flex-wrap: nowrap;
              white-space: nowrap;
              align-items: center;
              font-weight: 600;
            `}
          >
            <img
              src={CarIcon}
              alt="car icon"
              css={css`
                padding: 0;
                width: 2rem;
                height: 0.8rem;
                transform: scaleX(-1);
              `}
            />
            <Col
              css={css`
                font-size: 0.8rem;
                display: grid;
                margin: 0;
              `}
            >
              <span>
                {car.brand} {car.model}
              </span>
              <span
                css={css`
                  font-size: 0.8rem;
                  color: #808080;
                  margin-top: -0.2rem;
                `}
              >
                {car.color}
              </span>
            </Col>
          </Row>
          <Row>
            <Inputs.Button
              type="hollow"
              onClick={() => navigate(`/messages?chat=${tripId}`)}
            >
              {t("driverSection.contact")}
            </Inputs.Button>
          </Row>
        </Col>
        <Col
          css={css`
            align-self: center;
            text-align: center;
          `}
        >
          <ProfilePic
            src={driver.photo_url}
            rating={driver.avgRating}
            displayStars
            isVerified={driver.confirmed_email}
            outsidePictureStyling={css`
              width: 5rem;
            `}
            onClick={() => navigate(`/user/${driver.id}`)}
          />
        </Col>
      </Row>
      <Row
        css={css`
          padding: 0 20px !important;
        `}
      >
        <Inputs.Button
          type="hollow"
          onClick={() => navigate(`/user/${driver.id}`)}
        >
          {t("driverSection.profile")}
        </Inputs.Button>
      </Row>
    </Row>
  );
};
