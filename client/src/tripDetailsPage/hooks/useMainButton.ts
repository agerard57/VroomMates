import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Trip } from "../interfaces";
import { addPassenger, cancelTrip, removePassenger } from "../services";

type UseMainButtonManager = (trip: Trip) => {
  handleOrderTrip: () => void;
  handleCancelTrip: () => void;
  handleCancelParticipation: () => void;
};

export const useMainButton: UseMainButtonManager = (trip) => {
  const { t } = useTranslation("TripDetailsPage");

  const navigate = useNavigate();

  const handleOrderTrip = () => {
    // TODO Add payment recap page
    // () => navigate(`/payment/recap/${trip._id}`)
    addPassenger(trip._id).then((err) => {
      if (err) toast.error(t("message.order.error"));
      else {
        toast.success(t("message.order.success"));
        navigate("/trips");
      }
    });
  };

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

  return {
    handleOrderTrip,
    handleCancelTrip,
    handleCancelParticipation,
  };
};
