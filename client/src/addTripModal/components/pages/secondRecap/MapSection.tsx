/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";

import { useSecondMapSection } from "../../../hooks";
import { CoordinatesProps } from "../../../types";

export const MapSection: FC<CoordinatesProps> = ({
  departureCoordinates,
  arrivalCoordinates,
}) => {
  useSecondMapSection({
    departureCoordinates,
    arrivalCoordinates,
  });

  return (
    <Row
      css={css`
        padding: 0;
      `}
    >
      <div
        className="mapTwoWrapper"
        id="mapTwo"
        css={css`
          height: 30vh;
          overflow-x: scroll;
          border-radius: 10px;
          margin-bottom: 1rem;
        `}
      />
    </Row>
  );
};
