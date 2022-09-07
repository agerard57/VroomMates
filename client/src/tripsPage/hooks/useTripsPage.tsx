import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { usePageTitle } from "../../core";
import { Trips, TripsInitializer } from "../interfaces";
import { getUserTrips } from "../services";

type TripsPageManager = (
  userId: string | null,
  fetchData?: boolean
) => {
  trips: Trips;
};

export const useTripsPage: TripsPageManager = (userId, fetchData = false) => {
  const { t } = useTranslation("TripsPage");

  const [trips, setTrips] = useState<Trips>(TripsInitializer);

  usePageTitle(t("title"));

  useEffect(() => {
    if (fetchData && userId)
      getUserTrips(userId).then((trips) => {
        setTrips(trips);
      });
  }, [fetchData, userId]);

  return { trips };
};
