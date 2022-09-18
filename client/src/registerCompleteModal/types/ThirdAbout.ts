import { ChangeEvent } from "react";

export type AboutInputs = {
  bio: string;
  chatty: string;
  music: string;
  animals_tolerated: string;
  hobbies: string[];
};

export type MakeshiftBoolean = "true" | "false";

export type UseThirdAboutManager = () => {
  inputs: AboutInputs;
  setInputs: React.Dispatch<React.SetStateAction<AboutInputs>>;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  hobbyValue: string;
  setHobbyValue: React.Dispatch<React.SetStateAction<string>>;
  handleAddHobby: () => void;
};
