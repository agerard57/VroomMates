import { ChangeEvent, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { postCar } from "../services";
import { CarInputs, UseThirdCarManager } from "../types";

export const useThirdCar: UseThirdCarManager = (
  carInputFilled,
  setCarInputsFilled
) => {
  const { t } = useTranslation("BecomeDriverModal");

  const componentWillUnmount = useRef<boolean>(false);

  const inputsDefaultValues: CarInputs = {
    brand: "",
    model: "",
    color: "",
  };

  const [inputs, setInputs] = useState<CarInputs>(inputsDefaultValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  useEffect(() => {
    setCarInputsFilled(
      inputs.brand !== "" && inputs.model !== "" && inputs.color !== ""
    );
  }, [setCarInputsFilled, inputs.brand, inputs.model, inputs.color]);

  useEffect(() => {
    return () => {
      componentWillUnmount.current = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (componentWillUnmount.current)
        postCar(inputs).then((res) => {
          if (res.status === 200) toast.success(t(res.message));
          else toast.error(t(res.message));
        });
    };
  }, [carInputFilled, inputs, t]);

  return {
    handleInputChange,
  };
};
