/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, FC, SetStateAction } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useThirdAbout } from "../../../hooks";
import { BioSection } from "./BioSection";
import { HobbiesSection } from "./HobbiesSection";
import { QAndASection } from "./QAndASection";

type Props = {
  setAboutInputsFilled: Dispatch<SetStateAction<boolean>>;
};

export const ThirdAbout: FC<Props> = ({ setAboutInputsFilled }) => {
  const { t } = useTranslation("RegisterCompleteModal");

  const {
    inputs,
    setInputs,
    handleInputChange,
    hobbyValue,
    setHobbyValue,
    handleAddHobby,
  } = useThirdAbout(setAboutInputsFilled);

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
          css={css`
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
          <BioSection inputs={inputs} handleInputChange={handleInputChange} />
          <QAndASection inputs={inputs} handleInputChange={handleInputChange} />
          <HobbiesSection
            inputs={inputs}
            setInputs={setInputs}
            hobbyValue={hobbyValue}
            setHobbyValue={setHobbyValue}
            handleAddHobby={handleAddHobby}
          />
        </form>
      </Row>
    </Container>
  );
};
