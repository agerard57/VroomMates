/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Button, ProfilePic, RoundedContour, Stars } from "../../core";
import BasketBallSvg from "../assets/basketBallIcon.svg";
import BioSvg from "../assets/bioIcon.svg";
import CarSvg from "../assets/carIcon.svg";
import MicSvg from "../assets/micIcon.svg";
import PawSvg from "../assets/pawIcon.svg";
import VolDownSvg from "../assets/volDownIcon.svg";
import { User, UserInitializer } from "../interfaces";
import { getUser } from "../services";

export const ProfilePage: FC = () => {
  const { t } = useTranslation("ProfilePage");
  const [user, setUser] = useState<User>(UserInitializer);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getUser(id).then((user) => {
        setUser(user);
      });
    }
  }, [id]);

  useEffect(() => {
    document.title = t("title");
  }, [t]);

  console.log(user);
  // Get age from DOB
  const dob = new Date(user.birth_date);
  const age = (new Date().getFullYear() - dob.getFullYear()).toString();

  return (
    <>
      <div
        css={css`
          background: linear-gradient(
              90deg,
              rgba(69, 100, 255, 0.84) 0.62%,
              rgba(253, 101, 78, 0.84) 102.81%
            ),
            url(${user.photo_url});
          box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.18);
          height: 40vh;
          background-size: cover;
          color: white;
          padding: 0;
          width: -webkit-fill-available;
          transform: translateY(-10vh);
          clip-path: polygon(0 25%, 100% 25%, 100% 75%, 0 75%);
        `}
      />
      <Container
        css={css`
          position: absolute;
          top: 11.5vh;
          h2 {
            color: #3d3d3d;
            text-align: left;
          }
        `}
      >
        <Row
          css={css`
            align-items: center;
            text-align: -webkit-center;
          `}
        >
          <Col>
            <div
              css={css`
                width: 70px;
                height: 70px;
                border-radius: 50px;
                background: linear-gradient(180deg, #4563ff 0%, #fd664d 100%);
                border: 3px solid #ffffff;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              <span>
                <b>{user.avg_rating}</b> / 5
              </span>
            </div>
          </Col>
          <Col>
            <ProfilePic
              src={user.photo_url}
              rating={user.avg_rating}
              outsidePictureStyling={`
                width: 7rem;
                border:white 5px solid;
                align-items: center;
              `}
            />
          </Col>
          <Col>
            <div
              css={css`
                width: 75px;
                height: 75px;
                padding:3px;
                border-radius: 50px;
                background: linear-gradient(180deg, #4563ff 0%, #fd664d 100%);
                border: 3px solid #ffffff;
                display: flex;
                color: white;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                span {
                  font-size: 0.8rem;
              `}
            >
              {user.status === "driver" ? (
                <>
                  <b>{user.nb_trips_created}</b>
                  <span> TRIPS MADE</span>
                </>
              ) : (
                <>
                  <b>{user.nb_trips_participated}</b>
                  <span> TRIPS DONE</span>
                </>
              )}
            </div>
          </Col>
        </Row>
        <Row
          css={css`
            margin-top: -10px;
          `}
        >
          <Stars rating={user.avg_rating} isCurved />
        </Row>
        <Row>
          <h1
            css={css`
              margin: 0;
            `}
          >{`${user.name.first_name} ${user.name.last_name}`}</h1>
          <span
            css={css`
              color: #595959;
            `}
          >
            {age} y.o.
          </span>
        </Row>
        <Button
          type="hollow"
          buttonType="button"
          onClick={() => {}}
          optionalStyling={`padding:0 15px; margin: 5%;`}
        >
          Account management
        </Button>
        <div
          css={css`
            & > * {
              margin: 5% 0;
            }
            h2 {
              margin-bottom: 0;
            }
          `}
        >
          <RoundedContour
            outsideStyling={`
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          overflow: hidden;
          & > *{
            padding: 5%
            }
            `}
          >
            <Col sm={4}>
              <img src={BioSvg} alt="bio icon" />
            </Col>
            <Col
              sm={8}
              css={css`
                border-left: 2px solid rgba(0, 0, 0, 0.19);
                text-align: justify;
              `}
            >
              <Row>
                <h2>Bio</h2>
              </Row>
              <Row>
                <span>{user.about.bio}</span>
              </Row>
            </Col>
          </RoundedContour>
          <RoundedContour
            outsideStyling={`
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          overflow: hidden;
          & > *{
            padding: 5%
            }
            `}
          >
            <Col sm={4}>
              <img src={CarSvg} alt="car icon" />
            </Col>
            <Col
              sm={8}
              css={css`
                border-left: 2px solid rgba(0, 0, 0, 0.19);
                text-align: justify;
              `}
            >
              <Row>
                <h2>Car</h2>
              </Row>
              <Row>
                <span
                  css={css`
                    font-size: 1.1rem;
                    font-weight: 500;
                  `}
                >
                  {`${user.car?.brand} ${user.car?.model}`}
                </span>
              </Row>
              <Row>
                <span
                  css={css`
                    color: #808080;
                    font-size: 0.8rem;
                    font-weight: 500;
                  `}
                >
                  {user.car?.color}
                </span>
              </Row>
            </Col>
          </RoundedContour>
          <RoundedContour
            outsideStyling={`
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          overflow: hidden;
          & > *{
            padding: 5%
          }
          `}
          >
            <Col sm={4}>
              <img src={BasketBallSvg} alt="hobbies icon" />
            </Col>
            <Col
              sm={8}
              css={css`
                border-left: 2px solid rgba(0, 0, 0, 0.19);
                text-align: justify;
              `}
            >
              <Row>
                <h2>Hobbies</h2>
              </Row>
              <Row
                css={css`
                  width: -webkit-fill-available;
                `}
              >
                {user.about.hobbies.map((hobby) => (
                  <span
                    css={css`
                      padding: 0.5rem 1rem;
                      width: auto;
                      margin: 5px;
                      background-color: #92d1ff;
                      color: white;
                      border-radius: 50px;
                      text-align: center;
                    `}
                  >
                    {hobby}
                  </span>
                ))}
              </Row>
            </Col>
          </RoundedContour>
          <Row
            css={css`
              text-align: left;
              .row {
                margin: 10px 0;
              }
            `}
          >
            <Row
              css={css`
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: center;
                display: flex;
                align-items: center;
              `}
            >
              <Col
                sm={4}
                css={css`
                  width: auto;
                `}
              >
                <img src={MicSvg} alt="mic icon" />
              </Col>
              <Col sm={8}>
                <span
                  css={css`
                    font-size: 1.2rem;
                  `}
                >
                  Listens to music in the car
                </span>
              </Col>
            </Row>
            <Row
              css={css`
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: center;
                display: flex;
                align-items: center;
              `}
            >
              <Col
                sm={4}
                css={css`
                  width: auto;
                `}
              >
                <img src={VolDownSvg} alt="mic icon" />
              </Col>
              <Col sm={8}>
                <span
                  css={css`
                    font-size: 1.2rem;
                  `}
                >
                  Listens to music in the car
                </span>
              </Col>
            </Row>
            <Row
              css={css`
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: center;
                display: flex;
                align-items: center;
              `}
            >
              <Col
                sm={4}
                css={css`
                  width: auto;
                `}
              >
                <img src={PawSvg} alt="mic icon" />
              </Col>
              <Col sm={8}>
                <span
                  css={css`
                    font-size: 1.2rem;
                  `}
                >
                  Doesn’t mind pets in the car
                </span>
              </Col>
            </Row>
          </Row>
          <RoundedContour
            outsideStyling={`
            padding:0;
            overflow: hidden;
            `}
          >
            <Row>
              <h2>Last reviews</h2>
            </Row>
            <Row>
              {user.ratings.map((review) => (
                <Row>
                  <h3>{review.author.name.first_name}</h3>
                </Row>
              ))}
            </Row>
          </RoundedContour>
        </div>
      </Container>
    </>
  );
};
