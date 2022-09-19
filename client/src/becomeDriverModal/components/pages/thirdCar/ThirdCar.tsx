/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, FC, SetStateAction } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { CarImage } from "../../../assets";
import { useThirdCar } from "../../../hooks";
import { Input } from "./Input";

type Props = {
  setCarInputsFilled: Dispatch<SetStateAction<boolean>>;
};

export const ThirdCar: FC<Props> = ({ setCarInputsFilled }) => {
  const { t } = useTranslation("BecomeDriverModal");
  const { handleInputChange } = useThirdCar(setCarInputsFilled);

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
        <img
          src={CarImage}
          alt="cars"
          css={css`
            width: 60vw;
            margin-left: auto;
            margin-right: auto;
            display: block;
            padding-bottom: 1rem;
          `}
        />
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
            padding-bottom: 1rem;

            .row {
              display: flex;
              align-items: center;
            }
          `}
        >
          {["brand", "model", "color"].map((name, key) => (
            <Input
              key={key}
              name={name}
              handleInputChange={handleInputChange}
            />
          ))}
        </form>
      </Row>
    </Container>
  );
};
