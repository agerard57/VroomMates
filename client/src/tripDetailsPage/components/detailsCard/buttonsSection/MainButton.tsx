/* eslint-disable complexity */
import { FC } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { LoggedUserDataProps, Inputs } from "../../../../core";
import { Driver, Passenger, Trip } from "../../../interfaces";
import { cancelTrip, removePassenger } from "../../../services";

type Props = {
  trip: Trip;
  loggedUserData: LoggedUserDataProps["loggedUserData"];
  driver: Driver;
  passengers: Passenger[];
};

export const MainButton: FC<Props> = ({
  trip,
  loggedUserData,
  driver,
  passengers,
}) => {
  const { t } = useTranslation("TripDetailsPage");

  const navigate = useNavigate();

  const handleCancelTrip = () => {
    cancelTrip(trip._id).then((err) => {
      if (err) toast.error(t("message.cancel.error"));
      else {
        toast.success(t("message.cancel.success"));
        navigate("/trips");
      }
    });
  };

  const handleCancelParticipation = () => {
    removePassenger(trip._id).then((err) => {
      if (err) toast.error(t("message.participation.error"));
      else {
        toast.success(t("message.participation.success"));
        navigate("/trips");
      }
    });
  };

  // If the trip is done
  if (trip.status === "done")
    return (
      <Inputs.Button type="secondary" disabled>
        {t("buttonsSection.done")}
      </Inputs.Button>
    );

  // If the trip is canceled
  if (trip.status === "canceled")
    return (
      <Inputs.Button type="secondary" disabled>
        {t("buttonsSection.canceled")}
      </Inputs.Button>
    );

  // If the user is logged in
  if (loggedUserData) {
    // If user is banned //TODO Add protection in api route
    if (loggedUserData.role === "banned")
      return (
        <Inputs.Button type="secondary" disabled>
          {t("buttonsSection.banned")}
        </Inputs.Button>
      );

    // If logged user is an admin or the owner of the trip
    if (loggedUserData.role === "admin" || loggedUserData.id === driver.id)
      return (
        <Inputs.Button type="secondary" onClick={handleCancelTrip}>
          {t("buttonsSection.cancel")}
        </Inputs.Button>
      );

    // If logged user is one of the passengers
    if (passengers.some((passenger) => passenger._id === loggedUserData.id))
      return (
        <Inputs.Button type="secondary" onClick={handleCancelParticipation}>
          {t("buttonsSection.cancel")}
        </Inputs.Button>
      );

    // If neither of the above, order
    return (
      <Inputs.Button
        type="secondary"
        onClick={() => navigate(`/payment/recap/${trip._id}`)}
      >
        {t("buttonsSection.order")}
      </Inputs.Button>
    );
  }

  // Else, the user is not logged in
  return (
    <Inputs.Button type="secondary" onClick={() => navigate("/profile/login")}>
      {t("buttonsSection.signIn")}
    </Inputs.Button>
  );
};
