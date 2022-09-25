/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, FC, SetStateAction } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useFirstAdd } from "../../../hooks";
import { DaysSection } from "./DaysSection";
import { FrequentEndDateSection } from "./FrequentEndDateSection";
import { FrequentStartDateSection } from "./FrequentStartDateSection";
import { MapSection } from "./MapSection";
import { SeatsSection } from "./SeatsSection";
import { SingleStartDateSection } from "./SingleStartDateSection";
import { TypeSection } from "./TypeSection";

type Props = {
  setTripInputsFilled: Dispatch<SetStateAction<boolean>>;
};

export const FirstAdd: FC<Props> = ({ setTripInputsFilled }) => {
  const { t } = useTranslation("AddTripModal");

  const { inputs, setInputs } = useFirstAdd(setTripInputsFilled);

  return (
    <Container
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <Row>
        <h1
          css={css`
            font-weight: 700;
            color: #3d3d3d;
          `}
        >
          {t("title")}
        </h1>
        <p
          css={css`
            color: #636363;
            font-size: 1.1rem;
            text-align: center;
          `}
        >
          {t("page.0.subtitle")}
        </p>
      </Row>
      <Row>
        <form>
          <TypeSection inputs={inputs} setInputs={setInputs} />
          {inputs.type === "single" ? (
            <SingleStartDateSection setInputs={setInputs} />
          ) : (
            <>
              <FrequentStartDateSection setInputs={setInputs} />
              <FrequentEndDateSection setInputs={setInputs} />
              <DaysSection setInputs={setInputs} />
            </>
          )}
          <MapSection setInputs={setInputs} />
          <SeatsSection inputs={inputs} setInputs={setInputs} />
        </form>
      </Row>
    </Container>
  );
};
