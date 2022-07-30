/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ReactECharts from "echarts-for-react";
import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Input, RoundedContour } from "../../core";
import HomeImage1 from "../assets/images/home-image-1.png";
import HomeImage2 from "../assets/images/home-image-2.png";
import { Stats, StatsInitializer } from "../interfaces";
import { getStats } from "../services";
import { StatBox } from "./StatBox";

export const LandingPage: FC = () => {
  const [stats, setStats] = useState<Stats>(StatsInitializer);

  const data = [
    [
      { name: "Passengers", value: 264 },
      { name: "Drivers", value: 34 },
    ],
    [
      { name: "Single trips", value: 500 },
      { name: "Frequent trips", value: 100 },
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
          Ready to go on a trip?
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
              Let's find you a ride then!
            </h2>
            <hr />
            <Row>
              <Col>
                <Input inputTitle="Single Trip" />
              </Col>
              <Col>
                <Input inputTitle="Frequent Trip" />
              </Col>
            </Row>
            <Row>
              <Input inputTitle="Leaving from..." />
            </Row>
            <Row>
              <Input inputTitle="Going to..." />
            </Row>
            <Row>
              <Input inputTitle="Date" />
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
                  Find me a VroomMate!
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
              <h3>Car pooling? Why?</h3>
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
            At VroomMates, we firmly believe that carpooling represents one of
            the most efficient means of economical and ecological transport: not
            only do you save money by using our service, but you also help to
            split the carbon footprint that you would have created by using your
            car alone! Don't forget that it will also reduce congestion on busy
            highways 😁.
          </span>
        </Container>
      </section>
      <section>
        <Container fluid>
          <h3>Some exiting stats!</h3>
          <Row className="mx-0 grid gap-0">
            <Col>
              <StatBox
                value={stats.trips.totalTrips}
                caption="Ride made"
                color="#8BC43F"
              />
            </Col>
            <Col>
              <StatBox
                value={stats.trips.totalDistance.$numberDecimal}
                caption="Total miles"
                color="#8BC43F"
              />
            </Col>
            <Col>
              <StatBox
                value={stats.users.totalUsers}
                caption="Total users"
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

