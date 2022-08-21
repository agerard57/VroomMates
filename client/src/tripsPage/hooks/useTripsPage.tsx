import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { usePageTitle } from "../../core";
import { Trips, TripsInitializer } from "../interfaces";
import { getUserTrips } from "../services";

export const useTripsPage = () => {
  const { t } = useTranslation("TripsPage");

  const [trips, setTrips] = useState<Trips>(TripsInitializer);

  const userId = "62b118b7af7d95ee39d508eb";
  usePageTitle(t("title"));

  useEffect(() => {
    getUserTrips(userId).then((trips) => {
      setTrips(trips);
    });
  }, []);

  return { userId, trips };
};
