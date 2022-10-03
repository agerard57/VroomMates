/* eslint-disable @typescript-eslint/no-empty-function */

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent, FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs, MusicIcon, PetIcon, TalkIcon } from "../../core";
import { Props } from "../types";

export const AboutSection: FC<Props> = ({ userInputs, setUserInputs }) => {
  const { t } = useTranslation("EditProfilePage");

  const handleQandAInputs = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserInputs((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        [name]: value === "true" ? true : false,
      },
    }));
  };

  return (
    <Row
      css={css`
        margin-bottom: 1rem;
      `}
    >
      <p
        css={css`
          color: #636363;
          padding-top: 1rem;
          text-align: left;
          font-weight: 500;
          margin-bottom: 0.5rem;
        `}
      >
        {t("q&a.title")}
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
                filter: ${userInputs.about.chatty === true
                  ? "invert(41%) sepia(64%) saturate(1284%) hue-rotate(194deg) brightness(95%) contrast(97%);"
                  : "invert(53%) sepia(87%) saturate(1979%) hue-rotate(333deg) brightness(102%) contrast(96%)"};
                width: 1rem;
              `}
            />
          </Col>
          <Col xs={11}>
            <Inputs.Select
              onChange={handleQandAInputs}
              title="chatty"
              align="left"
            >
              <option
                value="true"
                selected={userInputs.about.chatty === true ? true : false}
              >
                {t("q&a.talk.true")}
              </option>
              <option
                value="false"
                selected={userInputs.about.chatty === false ? true : false}
              >
                {t("q&a.talk.false")}
              </option>
            </Inputs.Select>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <img
              src={MusicIcon}
              alt="music icon"
              css={css`
                filter: ${userInputs.about.music === true
                  ? "invert(41%) sepia(64%) saturate(1284%) hue-rotate(194deg) brightness(95%) contrast(97%);"
                  : "invert(53%) sepia(87%) saturate(1979%) hue-rotate(333deg) brightness(102%) contrast(96%)"};
                width: 1rem;
              `}
            />
          </Col>
          <Col xs={11}>
            <Inputs.Select
              onChange={handleQandAInputs}
              title="music"
              align="left"
            >
              <option value="true" selected={userInputs.about.music === true}>
                {t("q&a.music.true")}
              </option>
              <option value="false" selected={userInputs.about.music === false}>
                {t("q&a.music.false")}
              </option>
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
                filter: ${userInputs.about.animals_tolerated === true
                  ? "invert(41%) sepia(64%) saturate(1284%) hue-rotate(194deg) brightness(95%) contrast(97%);"
                  : "invert(53%) sepia(87%) saturate(1979%) hue-rotate(333deg) brightness(102%) contrast(96%)"};
                width: 1.3rem;
              `}
            />
          </Col>
          <Col xs={11}>
            <Inputs.Select
              onChange={handleQandAInputs}
              title="animals_tolerated"
              align="left"
            >
              <option
                value="true"
                selected={userInputs.about.animals_tolerated === true}
              >
                {t("q&a.pet.true")}
              </option>
              <option
                value="false"
                selected={userInputs.about.animals_tolerated === false}
              >
                {t("q&a.pet.false")}
              </option>
            </Inputs.Select>
          </Col>
        </Row>
      </div>
    </Row>
  );
};
