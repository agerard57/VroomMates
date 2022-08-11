/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../core";
import BackArrowSvg from "../../assets/backArrow.svg";
import CopyUrlSvg from "../../assets/copyUrl.svg";

export const ButtonsSection: FC = () => {
  const { t } = useTranslation("TripDetailsPage");
  const navigate = useNavigate();

  return (
    <Row
      css={css`
        margin-bottom: 0.5rem;
        align-items: center;
        display: flex;
      `}
    >
      <Col
        css={css`
          flex-flow: nowrap;
        `}
      >
        <Button
          type="hollow"
          onClick={() => navigate(-1)}
          optionalStyling={css`
            width: 2rem;
            height: 2rem;
          `}
        >
          <img
            src={BackArrowSvg}
            alt="back arrow"
            css={css`
              padding: 0;
              width: 0.7rem;
              display: block;
              height: 1rem;
            `}
          />
        </Button>
      </Col>
      <Col
        css={css`
          padding: 0;
        `}
      >
        <Button type="secondary">{t("buttonsSection.order")}</Button>
      </Col>
      <Col>
        <Button
          type="hollow"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast.success(t("buttonsSection.copiedMessage"));
          }}
          optionalStyling={css`
            width: 2rem;
            height: 2rem;
          `}
        >
          <img
            src={CopyUrlSvg}
            alt="copy url icon"
            css={css`
              padding: 0;
              width: 1rem;
              display: block;
              height: 1rem;
            `}
          />
        </Button>
      </Col>
    </Row>
  );
};
