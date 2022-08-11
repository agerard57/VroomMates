/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "../../../language";

type Props = {
  tripDays: number[];
};

export const DaysSection: FC<Props> = ({ tripDays }) => {
  const { t } = useTranslation("SearchPage");
  const { language } = useLanguage();

  const displayedDays = [
    t("days.sunday"), // 0
    t("days.monday"), // 1
    t("days.tuesday"), // 2
    t("days.wednesday"), // 3
    t("days.thursday"), // 4
    t("days.friday"), // 5
    t("days.saturday"), // 6
  ];

  const days = displayedDays.map((day, index) => {
    return tripDays.includes(index) ? (
      <span
        key={index}
        css={css`
          color: black;
        `}
      >
        {day}
      </span>
    ) : (
      <span
        key={index}
        css={css`
          color: #bdbdbd;
        `}
      >
        {day}
      </span>
    );
  });
  // In english, we display sunday first, this is not the case in french.
  if (language !== "en") days.push(days.splice(0, 1)[0]);
  return (
    <div
      css={css`
        text-align: center;
        border-top: 1px solid #e6e6e6;
        box-shadow: 0px -0.5px 2px rgba(0, 0, 0, 0.25);
        justify-content: space-evenly;
        display: flex;
        flex-direction: row;
        span {
          margin: 0.4rem;
          font-size: 1.2rem;
          font-weight: 600;
        }
      `}
    >
      {days}
    </div>
  );
};
