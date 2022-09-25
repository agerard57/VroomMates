import { useState, useEffect } from "react";

import { useModal } from "../../modal";

export const useAddTripModalBuilder = () => {
  const { modalName, setIsDisabled, iterator } = useModal();
  const { slideNumber } = iterator;

  const [tripInputsFilled, setTripInputsFilled] = useState<boolean>(false);

  useEffect(() => {
    if (modalName === "addTrip")
      setIsDisabled(!tripInputsFilled && slideNumber === 0);
  });

  return {
    setTripInputsFilled,
  };
};
