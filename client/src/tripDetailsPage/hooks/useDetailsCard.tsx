import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { usePageTitle } from "../../core";
import { Trip, TripInitializer } from "../interfaces";
import { getTrip } from "../services";

export const useDetailsCard = (): { trip: Trip } => {
  const { t } = useTranslation("TripDetailsPage");

  const [trip, setTrip] = useState<Trip>(TripInitializer);
  const { id } = useParams();

  usePageTitle(t("title"));

  useEffect(() => {
    if (id)
      getTrip(id)
        .then((trip) => {
          if (trip) setTrip(trip);
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((_err) => {
          window.location.href = "/";
        });
  }, [id]);

  return { trip };
};
