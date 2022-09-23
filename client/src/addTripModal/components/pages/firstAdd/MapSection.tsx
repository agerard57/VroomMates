/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useFirstMapSection } from "../../../hooks";
import { SetInputProp } from "../../../types";

export const MapSection: FC<SetInputProp> = ({ setInputs }) => {
  const { t } = useTranslation("AddTripModal");

  useFirstMapSection(setInputs);

  return (
    <Row
      css={css`
        display: flex;
        justify-content: center;
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
        {t("page.0.body.map.title")}
      </p>
      <Row
        css={css`
          border-bottom: 1px solid #e6e6e6;
          padding: 0;
        `}
      >
        <div
          className="mapOneWrapper"
          id="mapOne"
          css={css`
            height: 40vh;
            overflow-x: scroll;
            border-radius: 10px;
          `}
        />
      </Row>
    </Row>
  );
};
