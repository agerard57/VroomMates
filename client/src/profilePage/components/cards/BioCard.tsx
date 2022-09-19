/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { RoundedContour } from "../../../core";
import { BioIcon } from "../../assets";

type Props = {
  bio: string;
};

export const BioCard: FC<Props> = ({ bio }) => {
  const { t } = useTranslation("ProfilePage");

  return (
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
        <img src={BioIcon} alt="bio icon" />
      </Col>
      <Col
        sm={8}
        css={css`
          border-left: 2px solid rgba(0, 0, 0, 0.19);
          text-align: justify;
        `}
      >
        <Row>
          <h2>{t("cards.bio")}</h2>
        </Row>
        <Row>
          <span>{bio}</span>
        </Row>
      </Col>
    </RoundedContour>
  );
};
