/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "mapbox-gl-controls/lib/controls.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { FC } from "react";
import { Row } from "react-bootstrap";

import { useMapSection } from "../../hooks";

type Props = {
  tripCoordinates: {
    departure: [number, number];
    arrival: [number, number];
  };
};

export const MapSection: FC<Props> = ({ tripCoordinates }) => {
  useMapSection(tripCoordinates);
  return (
    <Row
      css={css`
        padding: 10px 7% !important;
        border-bottom: 1px solid #e6e6e6;
      `}
    >
      <div
        className="mapWrapper"
        id="map"
        css={css`
          height: 200px;
          border-radius: 10px;
        `}
      />
    </Row>
  );
};
