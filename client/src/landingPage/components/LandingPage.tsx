/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ReactECharts from "echarts-for-react";
import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Input, RoundedContour } from "../../core";
import HomeImage1 from "../assets/images/home-image-1.png";
import HomeImage2 from "../assets/images/home-image-2.png";
import { Stats, StatsInitializer } from "../interfaces";
import { getStats } from "../services";
import { StatBox } from "./StatBox";

export const LandingPage: FC = () => {
  const { t } = useTranslation("LandingPage");

  const [stats, setStats] = useState<Stats>(StatsInitializer);

  const data = [
    [
      {
        name: t("statsSection.charts.users.passengers"),
        value: stats.users.nbPassengers,
      },
      {
        name: t("statsSection.charts.users.drivers"),
        value: stats.users.nbDrivers,
      },
    ],
    [
      {
        name: t("statsSection.charts.trips.single"),
        value: stats.trips.nbSingleTrips,
      },
      {
        name: t("statsSection.charts.trips.frequent"),
        value: stats.trips.nbFrequentTrips,
      },
    ],
  ];
  const options = {
    title: {
      left: "center",
      textStyle: {
        color: "#999",
        fontWeight: "normal",
        fontSize: 16,
      },
    },
    series: data.map(function (data, idx) {
      const top = idx * 50;
      return {
        type: "pie",
        radius: [100, 55],
        responsive: true,
        maintainAspectRatio: false,
        top: top + "%",
        height: "50%",
        left: "center",
        scale: true,
        scaleSize: 1,
        width: 500,
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          alignTo: "edge",
          formatter: "{name|{b}}\n{time|{c}}",
          minMargin: 5,
          edgeDistance: 90,
          lineHeight: 15,
          rich: {
            time: {
              fontSize: 10,
              color: "#999",
            },
          },
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80,
        },
        data: data,
      };
    }),
  };

  const usersData = {
    labels: ["Passengers", "Drivers"],
    datasets: [
      {
        label: "# of Users",
        data: [stats.users.nbPassengers, stats.users.nbDrivers],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      },
    ],
  };

  const tripsData = {
    labels: ["Single trips", "Frequent trips"],
    datasets: [
      {
        label: "# of Trips",
        data: [stats.trips.nbSingleTrips, stats.trips.nbFrequentTrips],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      },
    ],
  };

  useEffect(() => {
    getStats().then((stats) => {
      setStats(stats);
    });
  }, []);

  console.log(stats.trips.totalDistance.$numberDecimal);
  return (
    <>
      <section
        css={css`
          background: linear-gradient(
            180deg,
            #5096ff 0%,
            #86b6ff 82.15%,
            rgba(136, 183, 255, 0) 100%
          );
          height: 100vh;
        `}
      >
        <h1
          css={css`
            font-family: "Baloo2";
            font-weight: 700;
            color: white;
          `}
        >
          {t("landingSection.title")}
        </h1>
        <img
          src={HomeImage1}
          alt="home-image-1"
          css={css`
            width: 80%;
          `}
        />
        <RoundedContour>
          <div>
            <h2
              css={css`
                font-family: "Baloo2";
                font-weight: 500;
                text-align: center;
              `}
            >
              {t("landingSection.search.title")}
            </h2>
            <hr />
            <Row>
              <Col>
                <Input
                  inputTitle={t("landingSection.search.tripType.singleTrip")}
                />
              </Col>
              <Col>
                <span>{t("landingSection.search.tripType.or")}</span>
              </Col>
              <Col>
                <Input
                  inputTitle={t("landingSection.search.tripType.frequentTrip")}
                />
              </Col>
            </Row>
            <Row>
              <Input inputTitle={t("landingSection.search.tripPoints.from")} />
            </Row>
            <Row>
              <span>{t("landingSection.search.tripPoints.to")}</span>
            </Row>
            <Row>
              <Input inputTitle={t("landingSection.search.tripPoints.getTo")} />
            </Row>
            <Row>
              <Input inputTitle={t("landingSection.search.date")} />
            </Row>
            <Row>
              <div
                css={css`
                  background: #569aff;
                  border: 2px solid #569aff;
                  border-radius: 16px;
                  padding: 10px;
                  height: 40px;
                  padding: 2px;
                  background-clip: content-box;
                `}
              >
                <span
                  css={css`
                    font-family: "Baloo2";
                    font-weight: 500;
                    color: white;
                  `}
                >
                  {t("landingSection.search.searchButton")}
                </span>
              </div>
            </Row>
          </div>
        </RoundedContour>
      </section>
      <section>
        <Container
          css={css`
            padding: 5vw;
          `}
        >
          <Row
            css={css`
              padding: 5vw 0;
            `}
          >
            <Col>
              <h3>{t("descriptionSection.title")}</h3>
            </Col>
            <Col>
              <img
                src={HomeImage2}
                alt="home-image-2"
                css={css`
                  width: 100%;
                `}
              />
            </Col>
          </Row>
          <span
            css={css`
              display: table;
              text-align: justify;
              font-family: "Baloo2";
              font-weight: 400;
            `}
          >
            {t("descriptionSection.description")}
          </span>
        </Container>
      </section>
      <section>
        <Container fluid>
          <h3>{t("statsSection.title")}</h3>
          <Row className="mx-0 grid gap-0">
            <Col>
              <StatBox
                value={stats.trips.totalTrips}
                caption={t("statsSection.boxes.rides")}
                color="#8BC43F"
              />
            </Col>
            <Col>
              <StatBox
                value={stats.trips.totalDistance.$numberDecimal}
                caption={t("statsSection.boxes.distance")}
                color="#8BC43F"
              />
            </Col>
            <Col>
              <StatBox
                value={stats.users.totalUsers}
                caption={t("statsSection.boxes.users")}
                color="#8BC43F"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <ReactECharts option={options} style={{ height: "500px" }} />
        </Container>
      </section>
    </>
  );
};

