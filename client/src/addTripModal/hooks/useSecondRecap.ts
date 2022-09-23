import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { TripInputs, tripInputsInitializer } from "../interfaces";
import { postTrip } from "../services";

export const useSecondRecap = () => {
  const [inputs, setInputs] = useState<TripInputs>(tripInputsInitializer);
  const { t } = useTranslation("AddTripModal");

  useEffect(() => {
    const localStorageInputs = localStorage.getItem("tripInputs");
    if (localStorageInputs) {
      setInputs(JSON.parse(localStorageInputs));
      postTrip(JSON.parse(localStorageInputs)).then((res) => {
        if (res.status === 201) {
          toast.success(t(res.message));
          setInputs(JSON.parse(localStorage.getItem("tripInputs")!));
        } else {
          toast.error(t(res.message));
        }
      });
    } else setInputs(tripInputsInitializer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { inputs };
};
