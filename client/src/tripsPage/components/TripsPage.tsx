/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { RoundedContour, useDaysDisplay } from "../../core";
import TripArrowSrc from "../assets/tripArrow.svg";
import { useTripsPage } from "../hooks";

export const TripsPage: FC = () => {
  const { t } = useTranslation("TripsPage");

  useTripsPage();
  const { days } = useDaysDisplay([0, 4]);

  return (
    <Container
      css={css`
        padding: 5vw;
      `}
    >
      <h1>{t("title")}</h1>
      <RoundedContour
        outsideStyling={css`
          display: flow-root;
          overflow: hidden;
          position: relative;
          padding: 0;
          flex-wrap: nowrap;
          font-weight: 600;
          font-size: 0.9rem;
          .row {
            padding: 10px;
            justify-content: center;
          }
        `}
      >
        <Row
          css={css`
            padding: 0 !important;
            place-content: center;
          `}
        >
          <div
            css={css`
              text-align: center;
              border-top: 1px solid #e6e6e6;
              box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.25);
              justify-content: space-evenly;
              display: flex;
              flex-direction: row;
              span {
                margin: 0.8rem 0;
                font-size: 1rem;
                font-weight: 600;
              }
            `}
          >
            <span>{t("tripsCreated.title")}</span>
          </div>
          <div
            css={css`
              display: flex;
              align-items: stretch;
              padding: 10px;
              justify-content: space-between;
            `}
          >
            <Col xs={10}>
              <Row>
                <Col
                  css={css`
                    display: flex;
                    justify-content: flex-start;
                    margin-left: 10px;
                    text-align: left;
                  `}
                >
                  From Wednesday, 10th December 2021 <br />
                  {/* TODO From To bold */}
                  To Thursday, 6th January 2021
                </Col>
              </Row>
              <Row>
                <Col
                  xs={3}
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: space-between;
                    div {
                      padding: 0 10px !important;
                    }
                  `}
                >
                  <Row>8:00AM</Row>
                  <Row>8:20AM</Row>
                </Col>
                <Col
                  xs={1}
                  css={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  `}
                >
                  <img src={TripArrowSrc} alt={"arrow"} />
                </Col>
                <Col
                  xs={8}
                  css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    div {
                      padding: 0 10px !important;
                    }
                  `}
                >
                  <Row>1 Rue du père potot, Metz</Row>
                  <Row>1 Rue du père potot, Metz</Row>
                </Col>
              </Row>
              <Row
                css={css`
                  align-items: center;
                `}
              >
                <Col
                  css={css`
                    display: flex;
                    margin-left: 10px;
                    justify-content: flex-start;
                    color: #787878;
                    font-weight: 500;
                    font-size: 0.8rem;
                  `}
                >
                  Organized by Yousef
                </Col>
                <Col
                  css={css`
                    display: flex;
                    justify-content: flex-end;
                    color: #367fef;
                    font-size: 1rem;
                  `}
                >
                  $1.01
                </Col>
              </Row>
              <Row
                css={css`
                  display: block;
                  display: flex;
                  justify-content: space-evenly;
                  flex-wrap: nowrap;
                  flex-direction: row;
                  border: 1px solid #e6e6e6;
                  width: fit-content;
                  margin: 0 auto;
                  span {
                    display: block;
                    width: auto;
                    padding: 0 4px;
                  }
                `}
              >
                {days}
              </Row>
            </Col>
            <Col
              xs={1}
              css={css`
                border-radius: 4px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: #0000000f;
                margin-right: 10px;
              `}
            >
              &gt;
            </Col>
          </div>
        </Row>
      </RoundedContour>
      <RoundedContour>
        <p>{t("currentTrips.title")}</p>
      </RoundedContour>
      <RoundedContour>
        <p>{t("pastTrips.title")}</p>
      </RoundedContour>
    </Container>
  );
};
