import { useEffect, useState } from "react";

import { useModal } from "../../modal";
import { UseBecomeDriverModalBuilderManager } from "../types";

export const useBecomeDriverModalBuilder: UseBecomeDriverModalBuilderManager =
  () => {
    const { setIsDisabled, iterator } = useModal();
    const { slideNumber } = iterator;

    const [driverLicenseFilled, setDriverLicenseFilled] = useState(false);
    const [carInputsFilled, setCarInputsFilled] = useState(false);

    useEffect(() => {
      setIsDisabled(
        (slideNumber === 1 && !driverLicenseFilled) ||
          (slideNumber === 2 && !carInputsFilled)
      );
    }, [slideNumber, driverLicenseFilled, carInputsFilled, setIsDisabled]);

    return {
      slideNumber,
      setIsDisabled,
      driverLicenseFilled,
      setDriverLicenseFilled,
      carInputsFilled,
      setCarInputsFilled,
    };
  };
