import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { usePageTitle } from "../../core";
import { Trip, TripInitializer } from "../interfaces";
import { getSearchResults } from "../services";

export const useSearchPage = (): { trips: [Trip] } => {
  const { t } = useTranslation("SearchPage");

  const [searchParams] = useSearchParams();
  const [trips, setTrips] = useState<[Trip]>([TripInitializer]);

  usePageTitle(t("title"));

  useEffect(() => {
    const type = searchParams.get("type");
    const departureLocation = searchParams.get("departureLocation");
    const arrivalLocation = searchParams.get("arrivalLocation");
    const date = searchParams.get("date");

    getSearchResults({
      type,
      departureLocation,
      arrivalLocation,
      date,
    }).then((trips) => {
      setTrips(trips);
    });
  }, [searchParams]);

  return { trips };
};
