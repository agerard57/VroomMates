/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Input, RoundedContour } from "../../../core";

export const SearchBox: FC = () => {
  const { t } = useTranslation("LandingPage");

  return (
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
  );
};
