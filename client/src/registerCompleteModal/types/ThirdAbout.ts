import { Dispatch, SetStateAction, ChangeEvent } from "react";

export type AboutInputs = {
  bio: string;
  chatty: string;
  music: string;
  animals_tolerated: string;
  hobbies: string[];
};

export type MakeshiftBoolean = "true" | "false";

export type ThirdAboutProps = {
  inputs: AboutInputs;
  setInputs: Dispatch<SetStateAction<AboutInputs>>;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  hobbyValue: string;
  setHobbyValue: Dispatch<SetStateAction<string>>;
  handleAddHobby: () => void;
};
