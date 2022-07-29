/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Input, RoundedContour } from "../../core";
import HomeImage1 from "../assets/images/home-image-1.png";
import { Stats, StatsInitializer } from "../interfaces";
import { getStats } from "../services";
import { StatBox } from "./StatBox";

export const LandingPage: FC = () => {
  const [stats, setStats] = useState<Stats>(StatsInitializer);

  useEffect(() => {
    getStats().then((stats) => {
      setStats(stats);
    });
  });

  console.log(stats);
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
                color: black;
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
          <h2
            css={css`
              font-family: "Baloo2";
              font-weight: 600;
            `}
          >
            Car pooling? Why?
          </h2>
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
            highways :)
          </span>
        </Container>
      </section>
      <section>
        <h2
          css={css`
            font-family: "Baloo2";
            font-weight: 600;
          `}
        >
          Some exiting stats!
        </h2>
        <Container fluid>
          <Row className="mx-0 grid gap-0">
            <Col>
              <StatBox number={200} caption="Ride made" color="#8BC43F" />
            </Col>
            <Col>
              <StatBox number={200} caption="Ride made" color="#8BC43F" />
            </Col>
            <Col>
              <StatBox number={200} caption="Ride made" color="#8BC43F" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

