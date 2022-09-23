/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ReactECharts from "echarts-for-react";
import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useStatsSection } from "../../hooks";
import { StatBox } from "./StatBox";

export const StatsSection: FC = () => {
  const { t } = useTranslation("LandingPage");

  const { stats, options } = useStatsSection();
  return (
    <section>
      <Container fluid>
        <Row className="mx-0 grid gap-0">
          <h3
            css={css`
              margin: 2rem 0;
            `}
          >
            {t("statsSection.title")}
          </h3>
          <Col>
            <StatBox
              value={stats.trips.totalTrips}
              caption={t("statsSection.boxes.rides")}
              color="#8BC43F"
            />
          </Col>
          <Col>
            <StatBox
              value={parseInt(stats.trips.totalDistance.$numberDecimal, 10)}
              caption={t("statsSection.boxes.distance")}
              color="#82BBFF"
              isDistance
            />
          </Col>
          <Col>
            <StatBox
              value={stats.users.totalUsers}
              caption={t("statsSection.boxes.users")}
              color="#FF8956"
            />
          </Col>
        </Row>
        <Row
          css={css`
            margin: 2rem 0 0 0;
          `}
        >
          <ReactECharts option={options} style={{ height: "500px" }} />
        </Row>
      </Container>
    </section>
  );
};
