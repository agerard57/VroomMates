/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { RoundedContour } from "../../core";
import { Trip } from "../interfaces";
import { SingleTrip } from "./singleTrip";

type Props = {
  cardName: string;
  trips: Trip[];
};

export const Card: FC<Props> = ({ children, cardName, trips }) => {
  const { t } = useTranslation("TripsPage");
  console.log(trips);

  /*   if (trips.length === 0) {
         return <EmptyCard cardName={cardName} />;
      return <span>TOZ</span>;
  } */

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
          span {
            margin: 0.8rem 0;
            font-size: 1rem;
            font-weight: 600;
          }
        `}
      >
        <span>{t(`${cardName}.title`)}</span>
      </Row>
      <Row
        css={css`
          padding: 0 !important;
          place-content: center;
        `}
      >
        {trips.map((trip: Trip) => (
          <SingleTrip key={trip._id} trip={trip} />
        ))}
      </Row>
    </RoundedContour>
  );
};
