import { useEffect, useState } from "react";

import { cookiesManager, tokenService } from "../../core";
import { useModal } from "../../modal";
import { UseRegisterCompleteModalBuilderManager } from "../types";

export const useRegisterCompleteModalBuilder: UseRegisterCompleteModalBuilderManager =
  () => {
    const { setIsDisabled, iterator } = useModal();
    const { slideNumber } = iterator;

    const [profilePicFilled, setProfilePicFilled] = useState(false);
    const [aboutInputsFilled, setAboutInputsFilled] = useState(false);

    const finalPageAction = () => {
      tokenService
        .refreshAuthToken(cookiesManager.getCookie("authToken"))
        .then((response) => {
          if (response.status === 200) {
            cookiesManager.setCookie("authToken", response.authToken, true);
          }
          window.location.href = "/";
        });
    };

    useEffect(() => {
      setIsDisabled(
        (slideNumber === 1 && !profilePicFilled) ||
          (slideNumber === 2 && !aboutInputsFilled)
      );
    }, [slideNumber, profilePicFilled, aboutInputsFilled, setIsDisabled]);

    return {
      setProfilePicFilled,
      setAboutInputsFilled,
      finalPageAction,
    };
  };
