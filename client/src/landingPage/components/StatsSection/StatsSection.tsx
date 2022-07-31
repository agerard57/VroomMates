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
        <Row>
          <ReactECharts option={options} style={{ height: "500px" }} />
        </Row>
      </Container>
    </section>
  );
};
