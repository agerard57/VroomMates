import { useEffect, useState } from "react";

import { useModal } from "../../modal";
import { getHasUserRequestedAlready } from "../services";
import { UseBecomeDriverModalBuilderManager } from "../types";

export const useBecomeDriverModalBuilder: UseBecomeDriverModalBuilderManager =
  () => {
    const { modalName, setIsDisabled, iterator } = useModal();
    const { slideNumber } = iterator;

    const [driverLicenseFilled, setDriverLicenseFilled] =
      useState<boolean>(false);
    const [carInputsFilled, setCarInputsFilled] = useState<boolean>(false);
    const [userAlreadyRequested, setUserAlreadyRequested] =
      useState<boolean>(false);

    useEffect(() => {
      getHasUserRequestedAlready().then((res) => {
        setUserAlreadyRequested(res);
      });
    }, []);

    useEffect(() => {
      if (modalName === "becomeDriver")
        setIsDisabled(
          (!userAlreadyRequested &&
            slideNumber === 1 &&
            !driverLicenseFilled) ||
            (!userAlreadyRequested && slideNumber === 2 && !carInputsFilled)
        );
    }, [
      slideNumber,
      driverLicenseFilled,
      carInputsFilled,
      setIsDisabled,
      userAlreadyRequested,
    ]);

    return {
      setDriverLicenseFilled,
      setCarInputsFilled,
      userAlreadyRequested,
    };
  };
