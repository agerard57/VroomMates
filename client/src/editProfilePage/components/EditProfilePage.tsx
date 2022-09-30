/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useEditProfilePage } from "../hooks";
import { AboutSection } from "./AboutSection";
import { PersonalInfosSection } from "./PersonalInfosSection";
import { ProfilePictureSection } from "./ProfilePictureSection";

export const EditProfilePage: FC = () => {
  const { t } = useTranslation("EditProfilePage");

  const { userInputs } = useEditProfilePage();
  console.log(userInputs);
  return (
    <Container
      css={css`
        padding: 5vw;
      `}
    >
      <h1>EditProfilePage page</h1>
      <p>{t("title")}</p>
      <ProfilePictureSection />
      <PersonalInfosSection />
      <AboutSection />
    </Container>
  );
};
