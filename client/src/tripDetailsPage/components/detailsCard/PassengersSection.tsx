/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { ProfilePic } from "../../../core";
import { Passenger } from "../../interfaces";

type Props = {
  passengers: Passenger[];
};

export const PassengersSection: FC<Props> = ({ passengers }) => {
  const { t } = useTranslation("TripDetailsPage");
  return passengers.length ? (
    <div>
      <Row
        css={css`
          padding: 1rem 0;
          border-top: 1px solid #e6e6e6;
        `}
      >
        <h3
          css={css`
            display: block;
          `}
        >
          {t("passengersSection.title")}
        </h3>
      </Row>
      <div
        css={css`
          display: flex;
          flex-wrap: nowrap;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-evenly;
        `}
      >
        {passengers.map((passenger) => (
          <div
            key={passenger.photo_url}
            css={css`
              display: grid;
              justify-items: center;
            `}
          >
            <ProfilePic //TODO MAKE ONCLICK THAT REDIRECTS TO PROFILE PAGE ?
              src={passenger.photo_url}
              outsidePictureStyling={css`
                width: 4rem;
              `}
            />
            <span>{passenger.first_name}</span>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};
