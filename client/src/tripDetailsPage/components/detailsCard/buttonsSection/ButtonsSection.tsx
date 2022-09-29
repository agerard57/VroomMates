/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Inputs, LoggedUserDataProps } from "../../../../core";
import { BackArrowIcon, CopyUrlIcon } from "../../../assets";
import { Driver, Passenger, Trip } from "../../../interfaces";
import { MainButton } from "./MainButton";

type Props = {
  trip: Trip;
  loggedUserData: LoggedUserDataProps["loggedUserData"];
  driver: Driver;
  passengers: Passenger[];
};

export const ButtonsSection: FC<Props> = ({
  trip,
  loggedUserData,
  driver,
  passengers,
}) => {
  const { t } = useTranslation("TripDetailsPage");

  const navigate = useNavigate();

  return (
    <Row
      css={css`
        margin-bottom: 0.5rem;
        align-items: center;
        display: flex;
      `}
    >
      <Col
        css={css`
          flex-flow: nowrap;
        `}
      >
        <Inputs.Button
          type="hollow"
          onClick={() => navigate(-1)}
          optionalStyling={css`
            width: 2rem;
            height: 2rem;
          `}
        >
          <img
            src={BackArrowIcon}
            alt="back arrow"
            css={css`
              padding: 0;
              width: 0.7rem;
              display: block;
              height: 1rem;
            `}
          />
        </Inputs.Button>
      </Col>
      <Col
        css={css`
          padding: 0;
        `}
      >
        <MainButton
          trip={trip}
          loggedUserData={loggedUserData}
          driver={driver}
          passengers={passengers}
        />
      </Col>
      <Col>
        <Inputs.Button
          type="hollow"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast.success(t("buttonsSection.copiedMessage"));
          }}
          optionalStyling={css`
            width: 2rem;
            height: 2rem;
          `}
        >
          <img
            src={CopyUrlIcon}
            alt="copy url"
            css={css`
              padding: 0;
              width: 1rem;
              display: block;
              height: 1rem;
            `}
          />
        </Inputs.Button>
      </Col>
    </Row>
  );
};
