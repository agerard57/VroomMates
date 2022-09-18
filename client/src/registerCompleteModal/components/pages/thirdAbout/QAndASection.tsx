/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../../../core";
import { TalkIcon, MusicIcon, PetIcon } from "../../../assets";
import { useThirdAbout } from "../../../hooks";

export const QAndASection: FC = () => {
  const { t } = useTranslation("RegisterCompleteModal");

  const { inputs, handleInputChange } = useThirdAbout();

  return (
    <Row>
      <p
        css={css`
          color: #636363;
          padding-top: 1rem;
          text-align: left;
          font-weight: 500;
          margin-bottom: 0.5rem;
        `}
      >
        {t("page.2.q&a.title")}
      </p>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding: 0;
          .row {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
          }
          .row > .col:first-of-type {
            // Left side
            align-items: flex-start;
          }
        `}
      >
        <Row>
          <Col xs={1}>
            <img
              src={TalkIcon}
              alt="talk icon"
              css={css`
                filter: ${inputs.chatty === "true"
                  ? "invert(41%) sepia(64%) saturate(1284%) hue-rotate(194deg) brightness(95%) contrast(97%);"
                  : "invert(53%) sepia(87%) saturate(1979%) hue-rotate(333deg) brightness(102%) contrast(96%)"};
                width: 1rem;
              `}
            />
          </Col>
          <Col xs={11}>
            <Inputs.Select
              onChange={handleInputChange}
              title="chatty"
              align="left"
            >
              <option value="true">{t("page.2.q&a.talk.true")}</option>
              <option value="false">{t("page.2.q&a.talk.false")}</option>
            </Inputs.Select>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <img
              src={MusicIcon}
              alt="music icon"
              css={css`
                filter: ${inputs.music === "true"
                  ? "invert(41%) sepia(64%) saturate(1284%) hue-rotate(194deg) brightness(95%) contrast(97%);"
                  : "invert(53%) sepia(87%) saturate(1979%) hue-rotate(333deg) brightness(102%) contrast(96%)"};
                width: 1rem;
              `}
            />
          </Col>
          <Col xs={11}>
            <Inputs.Select
              onChange={handleInputChange}
              title="music"
              align="left"
            >
              <option value="true">{t("page.2.q&a.music.true")}</option>
              <option value="false">{t("page.2.q&a.music.false")}</option>
            </Inputs.Select>
          </Col>
        </Row>
        <Row>
          <Col
            xs={1}
            css={css`
              padding-left: 0.6rem;
            `}
          >
            <img
              src={PetIcon}
              alt="pet icon"
              css={css`
                filter: ${inputs.animals_tolerated === "true"
                  ? "invert(41%) sepia(64%) saturate(1284%) hue-rotate(194deg) brightness(95%) contrast(97%);"
                  : "invert(53%) sepia(87%) saturate(1979%) hue-rotate(333deg) brightness(102%) contrast(96%)"};
                width: 1.3rem;
              `}
            />
          </Col>
          <Col xs={11}>
            <Inputs.Select
              onChange={handleInputChange}
              title="animals_tolerated"
              align="left"
            >
              <option value="true">{t("page.2.q&a.pet.true")}</option>
              <option value="false">{t("page.2.q&a.pet.false")}</option>
            </Inputs.Select>
          </Col>
        </Row>
      </div>
    </Row>
  );
};
