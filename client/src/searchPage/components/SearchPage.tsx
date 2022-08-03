/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { TripCard } from "./TripCard";

export const SearchPage: FC = () => {
  const { t } = useTranslation("SearchPage");
  return (
    <div>
      <h1>Search Page</h1>
      <TripCard />
    </div>
  );
};
