/** @jsxImportSource @emotion/react */
// eslint-disable-next-line import/no-internal-modules
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import { ZoomControl } from "mapbox-gl-controls";
import { useEffect } from "react";

import { useLanguage } from "../../language";

type StatsSectionOptions = (tripCoordinates: {
  departure: [number, number];
  arrival: [number, number];
}) => void;

export const useMapSection: StatsSectionOptions = (tripCoordinates) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (tripCoordinates.departure && tripCoordinates.arrival) {
      const llb = new mapboxgl.LngLatBounds(
        tripCoordinates.departure,
        tripCoordinates.arrival
      );
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: llb.getCenter(),
        zoom: 13,
        accessToken: process.env?.REACT_APP_MAPBOX_TOKEN,
        attributionControl: false,
      });
      map.fitBounds(llb, { padding: 30 });
      const directions = new MapboxDirections({
        accessToken: process.env?.REACT_APP_MAPBOX_TOKEN,
        profile: "mapbox/driving",
        interactive: false,
        alternatives: false,
        language: language,
        controls: {
          instructions: false,
          inputs: false,
          banner: false,
          profileSwitcher: false,
          wayname: false,
          geolocate: false,
          language: false,
          voice: false,
          feedback: false,
          voiceInstructions: false,
          separator: false,
          unitSwitcher: false,
          accessibility: false,
          origin: false,
        },
      });
      map.on("load", async () => {
        // Add routes
        await directions.setOrigin(tripCoordinates.departure);
        await directions.setDestination(tripCoordinates.arrival);
        llb.getCenter();
        map.addControl(directions);
        map.setLayoutProperty("country-label", "text-field", [
          "get",
          "name_" + language,
        ]);
      });

      map.addControl(new ZoomControl(), "top-right");
    }
  }, [language, tripCoordinates]);
};
