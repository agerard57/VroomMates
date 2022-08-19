import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { usePageTitle } from "../../core";
import { Trips, TripsInitializer } from "../interfaces";
import { getUserTrips } from "../services";

export const useTripsPage = () => {
  const { t } = useTranslation("TripsPage");

  const [trips, setTrips] = useState<Trips>(TripsInitializer);

  usePageTitle(t("title"));

  useEffect(() => {
    getUserTrips("62b118b7af7d95ee39d508eb").then((trips) => {
      setTrips(trips);
    });
  }, []);
  console.log(trips);
};
