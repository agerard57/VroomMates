/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import { ZoomControl } from "mapbox-gl-controls";
import { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { CalendarIcon, Inputs, TripTypes, useDaysDisplay } from "../../../core";
import { useLanguage } from "../../../language";
import { en } from "../../../tripsPage/i18n";
import { MapboxData, TripInputs, mapboxDataInitializer } from "../interfaces";

type Props = {
  inputs: TripInputs;
  setInputs: Dispatch<SetStateAction<TripInputs>>;
};

export const FirstAdd: FC<Props> = ({ inputs, setInputs }) => {
  const { t } = useTranslation("AddTripModal");
  const [typeChecked, setTypeChecked] = useState<TripTypes["Type"]>(
    inputs.type
  );
  const [seatsAvailable, setSeatsAvailable] = useState<number>(
    inputs.free_seats
  );
  // Split inputs.departure.time into two states for the date and time
  const [departureDate, setDepartureDate] = useState<string>(
    inputs.departure.time.toString().split("T")[0]
  );
  const [arrivalDate, setArrivalDate] = useState<string>(
    inputs.arrival.time.toString().split("T")[0]
  );

  const [departureTime, setDepartureTime] = useState<string>(
    inputs.departure.time.toString().split("T")[1]
  );

  const [days, setDays] = useState<number[] | undefined>(
    inputs.frequent_trip_options.day_of_week
  );

  const [mapboxData, setMapboxData] = useState<MapboxData>(
    mapboxDataInitializer
  );

  const { language } = useLanguage();
  const { daysArray } = useDaysDisplay();

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
    map.on("load", async () => {
      map.addControl(directions);
      map.setLayoutProperty("country-label", "text-field", [
        "get",
        "name_" + language,
      ]);
    });

    // Get the coordinates of the trip
    directions.on("route", (e: any) => {
      setMapboxData((prev) => ({
        ...prev,
        route: {
          distance: e.route[0].distance,
          duration: e.route[0].duration,
        },
      }));
    });

    directions.on("origin", (e: any) => {
      const departurePlaceName = (
        document.querySelector(
          "#mapbox-directions-origin-input > div > input"
        ) as HTMLInputElement
      ).value;
      console.log(departurePlaceName, e.feature.geometry);
      setMapboxData((prev) => ({
        ...prev,
        origin: {
          place_name: departurePlaceName,
          location: e.feature.geometry,
        },
      }));
    });

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

    return () => map.remove();
  }, [language, t, setMapboxData]);

  const priceManager = (distance: number) => {
    const distanceInMi = distance / 1609.344;
    const price = (cost: number) => distanceInMi * cost;
    // Passenger pays $0.40 and driver earns $0.36 per mile if distance is less than 20 miles
    if (distanceInMi < 20) {
      return {
        price_per_mile: price(0.36),
        service_fee: price(0.04),
        total: price(0.4),
      };
      // Passenger pays $0.30 and driver earns $0.27 per mile if distance is between 20 and 50 miles
    } else if (distanceInMi >= 20 && distanceInMi <= 50) {
      return {
        price_per_mile: price(0.27),
        service_fee: price(0.03),
        total: price(0.3),
      };
      // Passenger pays $0.20 and driver earns $0.18 per mile if distance is > 50 miles
    } else {
      return {
        price_per_mile: price(0.18),
        service_fee: price(0.02),
        total: price(0.2),
      };
    }
  };

  useEffect(() => {
    console.log(departureDate + " " + departureTime);
    const arrivalTime =
      departureDate && departureTime
        ? new Date(
            new Date(departureDate + "T" + departureTime).getTime() +
              mapboxData.route.duration * 1000
          )
        : new Date();

    setInputs({
      type: typeChecked,
      departure: {
        time: `${departureDate}T${departureTime}`,
        location: mapboxData.origin.location,
        place_name: mapboxData.origin.place_name,
      },
      arrival: {
        time: arrivalTime.toISOString(),
        location: mapboxData.destination.location,
        place_name: mapboxData.destination.place_name,
      },
      frequent_trip_options: {
        day_of_week: days,
        start_date: `${departureDate}T${departureTime}`,
        end_date: arrivalDate,
      },
      price_per_seat: priceManager(mapboxData.route.distance),
      free_seats: seatsAvailable,
    });
  }, [
    arrivalDate,
    days,
    departureDate,
    departureTime,
    mapboxData,
    seatsAvailable,
    setInputs,
    typeChecked,
  ]);

  return (
    <Container
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <Row>
        <h1
          css={css`
            font-weight: 700;
            color: #3d3d3d;
          `}
        >
          {t("title")}
        </h1>
        <p
          css={css`
            color: #636363;
            font-size: 1.1rem;
            text-align: center;
          `}
        >
          {t("page.0.subtitle")}
        </p>
      </Row>
      <Row>
        <form>
          <Row>
            <Col>
              <Inputs.Radio
                inputName="type"
                radioValue="single"
                inputPlaceholder={t("page.0.body.type.single")}
                activeRadio={typeChecked}
                onClickRadio={() => setTypeChecked("single")}
              />
            </Col>
            <Col>
              <Inputs.Radio
                inputName="type"
                radioValue="frequent"
                inputPlaceholder={t("page.0.body.type.frequent")}
                activeRadio={typeChecked}
                onClickRadio={() => setTypeChecked("frequent")}
              />
            </Col>
          </Row>
          <Row>
            <p
              css={css`
                color: #636363;
                padding-top: 1rem;
                text-align: left;
                font-weight: 500;
                margin-bottom: 0.5rem;
              `}
            >
              {t("page.0.body.date.frequentStartTitle")}
            </p>
            <Inputs.Date
              inputName="departureDate"
              icon={CalendarIcon}
              onChange={(e) => {
                setDepartureDate(e.target.value);
              }}
              isRequired
            />
          </Row>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              justify-content: center;
              align-items: center;
              margin: 1rem;
            `}
          >
            <span
              css={css`
                font-weight: 600;
                padding-right: 1rem;
              `}
            >
              {t("page.0.body.date.at")}
            </span>
            <Inputs.Time
              inputName="departureTime"
              onChange={(e) => setDepartureTime(e.target.value)}
              isRequired
            />
          </div>
          <Row>
            <p
              css={css`
                color: #636363;
                padding-top: 1rem;
                text-align: left;
                font-weight: 500;
                margin-bottom: 0.5rem;
              `}
            >
              {t("page.0.body.date.frequentEndTitle")}
            </p>
            <Inputs.Date
              inputName="departureDate"
              icon={CalendarIcon}
              onChange={(e) => {
                setArrivalDate(e.target.value);
              }}
              isRequired
            />
          </Row>
          <Row>
            <p
              css={css`
                color: #636363;
                padding-top: 1rem;
                text-align: left;
                font-weight: 500;
                margin-bottom: 0.5rem;
              `}
            >
              {t("page.0.body.frequency.title")}
            </p>
            <Row
              css={css`
                width: -webkit-fill-available;
                display: block;
              `}
            >
              {daysArray.map((day, index) => (
                <span
                  key={index}
                  css={css`
                    padding: 0.2rem;
                    width: auto;
                    text-align: center;
                    align-items: center;

                    span {
                      padding: 0.2rem 2rem;
                    }
                  `}
                >
                  <Inputs.CheckboxButton
                    inputName={day}
                    inputPlaceholder={day}
                    onClickCheckbox={() => {
                      if (days?.includes(index)) {
                        setDays(days.filter((day) => day !== index));
                      } else {
                        setDays([...(days || []), index]);
                      }
                    }}
                  />
                </span>
              ))}
            </Row>
          </Row>
          <Row
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <p
              css={css`
                color: #636363;
                padding-top: 1rem;
                text-align: left;
                font-weight: 500;
                margin-bottom: 0.5rem;
              `}
            >
              {t("page.0.body.map.title")}
            </p>
            <Row
              css={css`
                border-bottom: 1px solid #e6e6e6;
                padding: 0;
              `}
            >
              <div
                className="mapWrapper"
                id="map"
                css={css`
                  height: 40vh;
                  overflow-x: scroll;
                  border-radius: 10px;
                `}
              />
            </Row>
          </Row>
          <Row>
            <p
              css={css`
                color: #636363;
                padding-top: 1rem;
                text-align: left;
                font-weight: 500;
                margin-bottom: 0.5rem;
              `}
            >
              {t("page.0.body.seats.title")}
            </p>
            {[1, 2, 3, 4].map((seats) => (
              <Col>
                <Inputs.Radio
                  inputName="seats"
                  radioValue={seats.toString()}
                  key={seats}
                  inputPlaceholder={seats.toString()}
                  activeRadio={seatsAvailable.toString()}
                  onClickRadio={() => {
                    setSeatsAvailable(seats);
                  }}
                />
              </Col>
            ))}
          </Row>
        </form>
      </Row>
    </Container>
  );
};
