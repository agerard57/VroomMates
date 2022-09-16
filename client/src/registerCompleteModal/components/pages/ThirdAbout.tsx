/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../../core";
import AddButtonSrc from "../../assets/icons/addButton.svg";
import MusicIconSrc from "../../assets/icons/musicIcon.svg";
import PetIconSrc from "../../assets/icons/petIcon.svg";
import RemoveButtonSrc from "../../assets/icons/removeButton.svg";
import TalkIconSrc from "../../assets/icons/talkIcon.svg";

export const ThirdAbout: FC = () => {
  const { t } = useTranslation("RegisterCompleteModal");
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [selectTalk, setSelectTalk] = useState<string>("true");
  const [selectMusic, setSelectMusic] = useState<string>("true");
  const [selectPet, setSelectPet] = useState<string>("true");
  const [hobbyValue, setHobbyValue] = useState<string>("");
  const [hobbies, setHobbies] = useState<string[]>([]);

  console.log({
    selectTalk: selectTalk,
    selectMusic: selectMusic,
    selectPet: selectPet,
  });
  return (
    <Container
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
      `}
    >
      <Row>
        <h1
          css={css`
            font-weight: 700;
            color: #3d3d3d;
          `}
        >
          {t("page.2.title")}
        </h1>
        <p
          css={css`
            color: #636363;
            padding-top: 1rem;
            text-align: center;
          `}
        >
          {t("page.2.body")}
        </p>
      </Row>
      <Row>
        <form
          /* onSubmit={handleSubmit} */ css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: space-between;

            .row {
              display: flex;
              align-items: center;
            }
          `}
        >
          <Row>
            <Col>
              <p
                css={css`
                  color: #636363;
                  padding-top: 1rem;
                  text-align: left;
                  font-weight: 500;
                  margin-bottom: 0.5rem;
                `}
              >
                {t("page.2.bio.title")}
              </p>
            </Col>
            <Col>
              <p
                css={css`
                  color: #949494;
                  padding-top: 1rem;
                  text-align: right;
                  font-weight: 500;
                  font-size: 0.7rem;
                  margin-bottom: 0.2rem;
                `}
              >
                {textAreaValue.length} / 200
              </p>
            </Col>
            <Inputs.TextArea
              inputName="email"
              inputPlaceholder={t("page.2.bio.placeholder")}
              onChange={(e) => {
                setTextAreaValue(e.target.value);
              }}
              length={{ max: 200 }}
              isRequired
            />
          </Row>
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
                    src={TalkIconSrc}
                    alt="talk icon"
                    css={css`
                      filter: ${selectTalk === "true"
                        ? "invert(41%) sepia(64%) saturate(1284%) hue-rotate(194deg) brightness(95%) contrast(97%);"
                        : "invert(53%) sepia(87%) saturate(1979%) hue-rotate(333deg) brightness(102%) contrast(96%)"};
                      width: 1rem;
                    `}
                  />
                </Col>
                <Col xs={11}>
                  <Inputs.Select
                    onChange={(e) => {
                      setSelectTalk(e.target.value);
                    }}
                    title="selectTalk"
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
                    src={MusicIconSrc}
                    alt="music icon"
                    css={css`
                      filter: ${selectMusic === "true"
                        ? "invert(41%) sepia(64%) saturate(1284%) hue-rotate(194deg) brightness(95%) contrast(97%);"
                        : "invert(53%) sepia(87%) saturate(1979%) hue-rotate(333deg) brightness(102%) contrast(96%)"};
                      width: 1rem;
                    `}
                  />
                </Col>
                <Col xs={11}>
                  <Inputs.Select
                    onChange={(e) => {
                      setSelectMusic(e.target.value);
                    }}
                    title="selectMusic"
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
                    src={PetIconSrc}
                    alt="pet icon"
                    css={css`
                      filter: ${selectPet === "true"
                        ? "invert(41%) sepia(64%) saturate(1284%) hue-rotate(194deg) brightness(95%) contrast(97%);"
                        : "invert(53%) sepia(87%) saturate(1979%) hue-rotate(333deg) brightness(102%) contrast(96%)"};
                      width: 1.3rem;
                    `}
                  />
                </Col>
                <Col xs={11}>
                  <Inputs.Select
                    onChange={(e) => {
                      setSelectPet(e.target.value);
                    }}
                    title="selectPet"
                    align="left"
                  >
                    <option value="true">{t("page.2.q&a.pet.true")}</option>
                    <option value="false">{t("page.2.q&a.pet.false")}</option>
                  </Inputs.Select>
                </Col>
              </Row>
            </div>
          </Row>
          <Row>
            <Col>
              <p
                css={css`
                  color: #636363;
                  padding-top: 1rem;
                  text-align: left;
                  font-weight: 500;
                  margin-bottom: 0.5rem;
                `}
              >
                {t("page.2.hobbies.title")}
              </p>
            </Col>
            <Col>
              <p
                css={css`
                  color: #949494;
                  padding-top: 1rem;
                  text-align: right;
                  font-weight: 500;
                  font-size: 0.7rem;
                  margin-bottom: 0.2rem;
                `}
              >
                {hobbies.length} / 5
              </p>
            </Col>
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
              <Row
                css={css`
                  width: 100%;
                  margin-bottom: 0.7rem;
                `}
              >
                <Col xs={11}>
                  <Inputs.Text
                    inputName="hobbies"
                    inputPlaceholder={t("page.2.hobbies.placeholder")}
                    length={{ max: 20 }}
                    isRequired
                    outsideStyling={css`
                      width: 100%;
                    `}
                    align="left"
                    onChange={(e) => {
                      setHobbyValue(e.target.value);
                    }}
                    value={hobbyValue}
                  />
                </Col>
                <Col xs={1}>
                  <img
                    src={AddButtonSrc}
                    alt="talk icon"
                    css={css`
                      width: 1.9rem;
                      padding-bottom: 0.2rem;
                    `}
                    onClick={() => {
                      if (hobbyValue === "")
                        toast.error(t("page.2.hobbies.errors.empty"));
                      if (hobbyValue.length > 20)
                        toast.error(t("page.2.hobbies.errors.length"));
                      // If already exists
                      if (hobbies.includes(hobbyValue))
                        toast.error(t("page.2.hobbies.errors.alreadyExists"));
                      if (hobbies.length >= 5)
                        toast.error(t("page.2.hobbies.errors.max"));

                      if (
                        hobbyValue !== "" &&
                        hobbyValue.length <= 20 &&
                        !hobbies.includes(hobbyValue) &&
                        hobbies.length < 5
                      ) {
                        setHobbies([...hobbies, hobbyValue]);
                        setHobbyValue("");
                      }
                    }}
                  />
                </Col>
              </Row>
              <Row
                css={css`
                  width: 100%;
                  display: contents !important;
                `}
              >
                <div
                  css={css`
                    text-align: left;
                    padding: 5px 10px;
                    background: #ffffff;
                    border: 2px solid #a7a7a7;
                    border-radius: 10px;
                    margin-bottom: 0.3rem;
                  `}
                >
                  {hobbies.length === 0 ? (
                    <span
                      css={css`
                        color: #636363;
                        font-weight: 500;
                        padding: 1rem 0;
                      `}
                    >
                      {t("page.2.hobbies.empty")}
                    </span>
                  ) : (
                    hobbies.map((value, index) => (
                      <>
                        <div
                          key={index}
                          css={css`
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0.3rem 0;
                          `}
                        >
                          <span
                            css={css`
                              color: black;
                              font-weight: 500;
                            `}
                          >
                            {value}
                          </span>
                          <img
                            src={RemoveButtonSrc}
                            alt="delete button"
                            css={css`
                              width: 1rem;
                              margin-right: 0.5rem;
                            `}
                            onClick={() => {
                              setHobbies(
                                hobbies.filter((hobby) => hobby !== value)
                              );
                            }}
                          />
                        </div>
                        {index !== hobbies.length - 1 && (
                          <div
                            css={css`
                              margin: 0.3rem 0;
                              width: 100%;
                              // Center
                              margin-left: auto;
                              margin-right: auto;
                              border-bottom: 1px solid #a7a7a7;
                            `}
                          />
                        )}
                      </>
                    ))
                  )}
                </div>
              </Row>
            </div>
          </Row>
        </form>
      </Row>
    </Container>
  );
};
