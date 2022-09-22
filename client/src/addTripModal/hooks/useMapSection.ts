import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import { useEffect, Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "../../language";
import { MapboxData } from "../interfaces";

type UseMapSectionManager = (
  setMapboxData: Dispatch<SetStateAction<MapboxData>>
) => void;

export const useMapSection: UseMapSectionManager = (setMapboxData) => {
  const { t } = useTranslation("AddTripModal");

  const { language } = useLanguage();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 13,
      accessToken: process.env?.REACT_APP_MAPBOX_TOKEN,
      attributionControl: false,
    });

    const directions = new MapboxDirections({
      accessToken: process.env?.REACT_APP_MAPBOX_TOKEN,
      profile: "mapbox/driving",
      interactive: false,
      language: language,
      placeholderOrigin: t("page.0.body.map.departure"),
      placeholderDestination: t("page.0.body.map.arrival"),
      alternatives: false,
      controls: {
        instructions: false,
        inputs: true,
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
        origin: false,
      },
    });

    // Load map and directions
    map.on("load", async () => {
      map.addControl(directions);
      map.setLayoutProperty("country-label", "text-field", [
        "get",
        "name_" + language,
      ]);
    });

    // Get the distance and duration of the route
    directions.on("route", (e: any) => {
      setMapboxData((prev) => ({
        ...prev,
        route: {
          distance: e.route[0].distance,
          duration: e.route[0].duration,
        },
      }));
    });

    // Get the departure location and name
    directions.on("origin", (e: any) => {
      const departurePlaceName = (
        document.querySelector(
          "#mapbox-directions-origin-input > div > input"
        ) as HTMLInputElement
      ).value;

      setMapboxData((prev) => ({
        ...prev,
        origin: {
          place_name: departurePlaceName,
          location: e.feature.geometry,
        },
      }));
    });

    // Get the arrival location and name
    directions.on("destination", (e: any) => {
      const arrivalPlaceName = (
        document.querySelector(
          "#mapbox-directions-destination-input > div > input"
        ) as HTMLInputElement
      ).value;

      setMapboxData((prev) => ({
        ...prev,
        destination: {
          place_name: arrivalPlaceName,
          location: e.feature.geometry,
        },
      }));
    });

    // Clean up on unmount
    return () => map.remove();
  }, [language, t, setMapboxData]);
};
