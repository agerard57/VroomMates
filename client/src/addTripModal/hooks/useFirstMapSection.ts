/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line import/no-internal-modules
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import { useEffect, Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "../../language";
import { priceManager } from "../helpers";
import { TripInputs } from "../interfaces";

type UseMapSectionManager = (
  setInputs: Dispatch<SetStateAction<TripInputs>>
) => void;

export const useFirstMapSection: UseMapSectionManager = (setInputs) => {
  const { t } = useTranslation("AddTripModal");

  const { language } = useLanguage();

  useEffect(() => {
    const mapOne = new mapboxgl.Map({
      container: "mapOne",
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 13,
      accessToken: process.env?.REACT_APP_MAPBOX_TOKEN,
      attributionControl: false,
    });

    const directionsOne = new MapboxDirections({
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
        switcher: false,
        accessibility: false,
        origin: false,
      },
    });

    // Load map and directions
    mapOne.on("load", async () => {
      mapOne.addControl(directionsOne);
      mapOne.setLayoutProperty("country-label", "text-field", [
        "get",
        "name_" + language,
      ]);
    });

    // Get the distance and duration of the route
    directionsOne.on("route", (e: any) => {
      const arrivalTime = (departureTime: string) =>
        new Date(
          new Date(departureTime ? departureTime : "1900-12-01").getTime() +
            e.route[0].duration * 1000
        );

      setInputs((prev) => ({
        ...prev,
        arrival: {
          ...prev.arrival,
          time: arrivalTime(prev.departure.time).toISOString(),
        },
        price_per_seat: priceManager(e.route[0].distance),
        distance: Math.round(e.route[0].distance * 0.000621371 * 100) / 100,
        trip_duration: Math.round(e.route[0].duration / 60),
      }));
    });

    // Get the departure location and name
    directionsOne.on("origin", (e: any) => {
      const departurePlaceName = document.querySelector(
        "#mapbox-directions-origin-input > div > input"
      )
        ? (
            document.querySelector(
              "#mapbox-directions-origin-input > div > input"
            ) as HTMLInputElement
          ).value
        : "";

      setInputs((prev) => ({
        ...prev,
        departure: {
          ...prev.departure,
          place_name: departurePlaceName,
          location: e.feature.geometry,
        },
      }));
    });

    // Get the arrival location and name
    directionsOne.on("destination", (e: any) => {
      const arrivalPlaceName = document.querySelector(
        "#mapbox-directions-destination-input > div > input"
      )
        ? (
            document.querySelector(
              "#mapbox-directions-destination-input > div > input"
            ) as HTMLInputElement
          ).value
        : "";

      setInputs((prev) => ({
        ...prev,
        arrival: {
          ...prev.arrival,
          place_name: arrivalPlaceName,
          location: e.feature.geometry,
        },
      }));
    });

    // Clean up on unmount
    return () => mapOne.remove();
  }, [language, setInputs, t]);
};
