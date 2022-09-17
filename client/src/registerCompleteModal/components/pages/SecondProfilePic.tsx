/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import PlusButtonSrc from "../../assets/icons/plusButton.svg";
import { useSecondPageProfilePic } from "../../hooks";

export const SecondProfilePic: FC = () => {
  const { t } = useTranslation("RegisterCompleteModal");
  const { profilePic, inputClickHandler, inputFile } =
    useSecondPageProfilePic();

  return (
    <Container
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <Row>
        <img
          src={profilePic}
          alt="profile pic"
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
            margin-bottom: 2rem;
          `}
        />
        <h1
          css={css`
            font-weight: 700;
            color: #3d3d3d;
          `}
        >
          {t("page.1.title")}
        </h1>
      </Row>
      <Row
        css={css`
          display: flex;
        `}
      >
        <p
          css={css`
            color: #636363;
            padding-top: 1rem;
            margin-bottom: 0;
            white-space: pre-wrap;
            line-height: 0.8;
          `}
        >
          {t("page.1.body")}
        </p>
        <img
          src={PlusButtonSrc}
          alt="plus button"
          css={css`
            padding: 2rem;

            margin-left: auto;
            margin-right: auto;
            display: block;
            height: 10rem;
            width: auto;
          `}
          onClick={() => {
            inputFile.current?.click();
          }}
        />
        <input
          type="file"
          id="file"
          accept="image/png, image/gif, image/jpeg"
          ref={inputFile}
          css={css`
            display: none;
          `}
          onChange={(e) => inputClickHandler(e)}
        />
      </Row>
    </Container>
  );
};
