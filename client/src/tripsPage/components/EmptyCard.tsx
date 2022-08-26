/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  cardName: string;
};

export const EmptyCard: FC<Props> = ({ cardName }) => {
  const { t } = useTranslation("TripsPage");
  return (
    <div
      className="trip"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <span
        css={css`
          padding: 100px;
          font-size: 1.3rem;
          color: #696969;
          white-space: nowrap;
        `}
      >
        {t(`${cardName}.noResult`)}
      </span>
    </div>
  );
};
