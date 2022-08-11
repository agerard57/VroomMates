/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "../../language";

export const useDaysDisplay = (tripDays: number[]) => {
  const { t } = useTranslation("core");
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
  return { days };
};
