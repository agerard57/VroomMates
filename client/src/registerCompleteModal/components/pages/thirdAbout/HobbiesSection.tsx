/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../../../core";
import { AddButton, RemoveButton } from "../../../assets";
import { useThirdAbout } from "../../../hooks";

export const HobbiesSection: FC = () => {
  const { t } = useTranslation("RegisterCompleteModal");

  const { inputs, setInputs, hobbyValue, setHobbyValue, handleAddHobby } =
    useThirdAbout();

  return (
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
          {inputs.hobbies.length} / 5
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
              src={AddButton}
              alt="talk icon"
              css={css`
                width: 1.9rem;
                padding-bottom: 0.2rem;
              `}
              onClick={handleAddHobby}
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
            {inputs.hobbies.length === 0 ? (
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
              inputs.hobbies.map((value, index) => (
                <Fragment key={index}>
                  <div
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
                      src={RemoveButton}
                      alt="delete button"
                      css={css`
                        width: 1rem;
                        margin-right: 0.5rem;
                      `}
                      onClick={() => {
                        setInputs({
                          ...inputs,
                          hobbies: inputs.hobbies.filter(
                            (hobby) => hobby !== value
                          ),
                        });
                      }}
                    />
                  </div>
                  {index !== inputs.hobbies.length - 1 && (
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
                </Fragment>
              ))
            )}
          </div>
        </Row>
      </div>
    </Row>
  );
};
