/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs } from "../../core";
import { useEditProfilePage } from "../hooks";
import { AboutSection } from "./AboutSection";
import { PersonalInfosSection } from "./PersonalInfosSection";
import { ProfilePictureSection } from "./ProfilePictureSection";

export const EditProfilePage: FC = () => {
  const { t } = useTranslation("EditProfilePage");

  const { userInputs, setUserInputs } = useEditProfilePage();

  return (
    <Container
      css={css`
        padding: 5vw;
      `}
    >
      <h1
        css={css`
          font-weight: 700;
        `}
      >
        {t("title")}
      </h1>
      <ProfilePictureSection
        userInputs={userInputs}
        setUserInputs={setUserInputs}
      />
      <PersonalInfosSection
        userInputs={userInputs}
        setUserInputs={setUserInputs}
      />
      <AboutSection userInputs={userInputs} setUserInputs={setUserInputs} />
      {/* TODO <HobbiesSection/> */}
      <Row>
        <Inputs.Button
          type="primary"
          optionalStyling={css`
            margin: 0.5rem auto;
          `}
        >
          {t("updateButton")}
        </Inputs.Button>
        <Inputs.Button type="small" onClick={() => window.history.back()}>
          {t("cancelButton")}
        </Inputs.Button>
      </Row>
    </Container>
  );
};
