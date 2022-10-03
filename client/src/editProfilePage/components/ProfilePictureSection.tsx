/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Inputs, PlusButton, s3UrlBuilder } from "../../core";
import { Props } from "../types";

export const ProfilePictureSection: FC<Props> = ({
  userInputs,
  setUserInputs,
}) => {
  const { t } = useTranslation("EditProfilePage");

  return (
    <Container
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
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
        {t("profilePicture.title")}
      </p>
      <img
        src={s3UrlBuilder(userInputs.photo_url)}
        alt="driver license"
        css={css`
          width: 50vw;
          height: 50vw;
          padding: 0;
          margin-left: auto;
          margin-right: auto;
          border-radius: 50%;
          border: 3px solid #609ffe;
          padding: 3px;
          display: block;
          margin-bottom: -1rem;
        `}
      />

      <Inputs.Button
        type="hollow"
        optionalStyling={css`
          width: 50vw;
          margin: 2rem auto;
        `}
      >
        {t("profilePicture.button")}
      </Inputs.Button>
    </Container>
  );
};
