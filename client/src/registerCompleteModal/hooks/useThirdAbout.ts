import { ChangeEvent, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { postAbout } from "../services";
import { AboutInputs, MakeshiftBoolean, UseThirdAboutManager } from "../types";

export const useThirdAbout: UseThirdAboutManager = () => {
  const { t } = useTranslation("RegisterCompleteModal");

  const componentWillUnmount = useRef<boolean>(false);

  const [hobbyValue, setHobbyValue] = useState<string>("");
  const inputsDefaultValues: AboutInputs = {
    bio: "",
    chatty: "true" as MakeshiftBoolean,
    music: "true" as MakeshiftBoolean,
    animals_tolerated: "true" as MakeshiftBoolean,
    hobbies: [],
  };

  const [inputs, setInputs] = useState<AboutInputs>(inputsDefaultValues);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleAddHobby = () => {
    if (hobbyValue === "") toast.error(t("page.2.hobbies.errors.empty"));
    if (hobbyValue.length > 20) toast.error(t("page.2.hobbies.errors.length"));

    // If already exists
    if (inputs.hobbies.includes(hobbyValue))
      toast.error(t("page.2.hobbies.errors.alreadyExists"));
    if (inputs.hobbies.length >= 5) toast.error(t("page.2.hobbies.errors.max"));

    if (
      hobbyValue !== "" &&
      hobbyValue.length <= 20 &&
      !inputs.hobbies.includes(hobbyValue) &&
      inputs.hobbies.length < 5
    ) {
      setInputs({
        ...inputs,
        hobbies: [...inputs.hobbies, hobbyValue],
      });
      setHobbyValue("");
    }
  };

  useEffect(() => {
    return () => {
      componentWillUnmount.current = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (componentWillUnmount.current)
        if (inputs.hobbies.length > 0)
          postAbout(inputs).then((res) => {
            if (res.status === 200) toast.success(t(res.message));
            else toast.error(t(res.message));
          });
    };
  }, [inputs, t]);

  return {
    inputs,
    setInputs,
    handleInputChange,
    hobbyValue,
    setHobbyValue,
    handleAddHobby,
  };
};
