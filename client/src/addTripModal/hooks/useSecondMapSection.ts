// eslint-disable-next-line import/no-internal-modules
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

import { useLanguage } from "../../language";
import { UseSecondMapSectionManager } from "../types";

export const useSecondMapSection: UseSecondMapSectionManager = ({
  departureCoordinates,
  arrivalCoordinates,
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    const llb = new mapboxgl.LngLatBounds(
      departureCoordinates,
      arrivalCoordinates
    );
    const mapTwo = new mapboxgl.Map({
      container: "mapTwo",
      center: llb.getCenter(),

      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 13,
      accessToken: process.env?.REACT_APP_MAPBOX_TOKEN,
      attributionControl: false,
    });

    mapTwo.fitBounds(llb, { padding: 30 });

    const directionsTwo = new MapboxDirections({
      accessToken: process.env?.REACT_APP_MAPBOX_TOKEN,
      profile: "mapbox/driving",
      interactive: false,
      alternatives: false,
      origin: departureCoordinates,
      destination: arrivalCoordinates,
      controls: {
        instructions: false,
        inputs: false,
        banner: false,
        profileSwitcher: false,
        wayname: false,
        geolocate: false,
        voice: false,
        feedback: false,
        voiceInstructions: false,
        separator: false,
        unitSwitcher: false,
        accessibility: false,
      },
    });

    // Load map and directions
    mapTwo.on("load", () => {
      mapTwo.addControl(directionsTwo);
      mapTwo.setLayoutProperty("country-label", "text-field", [
        "get",
        "name_" + language,
      ]);
      llb.getCenter();

      directionsTwo.setOrigin(departureCoordinates);
      directionsTwo.setDestination(arrivalCoordinates);
    });

    // Clean up on unmount
    return () => mapTwo.remove();
  }, [arrivalCoordinates, departureCoordinates, language]);
};
