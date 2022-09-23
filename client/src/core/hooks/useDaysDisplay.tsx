/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "../../language";

export const useDaysDisplay = (tripDays?: number[]) => {
  const { t } = useTranslation("Core");
  const { language } = useLanguage();

  const daysArray = [
    t("days.sunday"), // 0
    t("days.monday"), // 1
    t("days.tuesday"), // 2
    t("days.wednesday"), // 3
    t("days.thursday"), // 4
    t("days.friday"), // 5
    t("days.saturday"), // 6
  ];

  const displayDays = daysArray.map((day, index) =>
    tripDays && tripDays.includes(index) ? (
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
    )
  );

  // In english, we display sunday first, this is not the case in french.
  if (language !== "en") displayDays.push(displayDays.splice(0, 1)[0]);

  return { daysArray, displayDays };
};
