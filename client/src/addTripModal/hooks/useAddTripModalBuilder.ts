import { useState, useEffect } from "react";

import { useModal } from "../../modal";

export const useAddTripModalBuilder = () => {
  const { setIsDisabled, iterator } = useModal();
  const { slideNumber } = iterator;

  const [tripInputsFilled, setTripInputsFilled] = useState<boolean>(false);

  useEffect(() => {
    setIsDisabled(!tripInputsFilled && slideNumber === 0);
  });

  return {
    setTripInputsFilled,
  };
};
