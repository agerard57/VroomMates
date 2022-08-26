/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { RoundedContour } from "../../core";
import { Trip } from "../interfaces";
import { EmptyCard } from "./EmptyCard";
import { SingleTrip } from "./singleTrip";

type Props = {
  cardName: string;
  trips: Trip[];
};

export const Card: FC<Props> = ({ cardName, trips }) => {
  const { t } = useTranslation("TripsPage");

  return (
    <RoundedContour
      outsideStyling={css`
        display: flow-root;
        overflow: hidden;
        position: relative;
        padding: 0;
        flex-wrap: nowrap;
        font-weight: 600;
        font-size: 0.9rem;

        .row {
          padding: 10px;
          justify-content: center;
        }

        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      `}
    >
      <Row
        css={css`
          text-align: center;
          border-top: 1px solid #e6e6e6;
          box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.25);
          justify-content: space-around;
          display: flex;
          flex-direction: row;
        `}
      >
        <span
          css={css`
            margin: 0;
            padding: 0;
            font-size: 1.2rem;
            font-weight: 600;
          `}
        >
          {t(`${cardName}.title`, { count: trips.length })}
        </span>
      </Row>
      <Row
        css={css`
          padding: 0 !important;
          place-content: center;
        `}
      >
        {trips.length > 0 ? (
          trips.map((trip: Trip) => (
            <>
              <SingleTrip key={trip._id} trip={trip} />
              <hr
                css={css`
                  width: 80%;
                  margin: 1rem;
                  &:last-of-type {
                    display: none;
                  }
                `}
              />
            </>
          ))
        ) : (
          <EmptyCard cardName={cardName} />
        )}
      </Row>
    </RoundedContour>
  );
};
