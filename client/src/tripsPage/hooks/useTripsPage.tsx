import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { usePageTitle } from "../../core";
import { Trips, TripsInitializer } from "../interfaces";
import { getUserTrips } from "../services";

type TripsPageManager = (fetchData?: boolean) => {
  userId: string;
  trips: Trips;
};

export const useTripsPage: TripsPageManager = (fetchData = false) => {
  const { t } = useTranslation("TripsPage");

  const [trips, setTrips] = useState<Trips>(TripsInitializer);

  const userId = "62d7ca8e711c0dd9eced0ee2";

  usePageTitle(t("title"));

  useEffect(() => {
    if (fetchData)
      getUserTrips(userId).then((trips) => {
        setTrips(trips);
      });
  }, [fetchData]);

  return { userId, trips };
};
