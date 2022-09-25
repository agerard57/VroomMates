import { Dispatch, SetStateAction } from "react";

import { SlideSpec } from "./SlideSpec";

export type UseModalManager = {
  modalName: string;
  isOpen: boolean;
  slideSpecs: SlideSpec[];
  openModal: (slideSpecs: SlideSpec[], modalName: string) => void;
  closeModal: () => void;
  iterator: {
    previous: () => void;
    slideNumber: number;
    next: () => void;
  };
  isDisabled: boolean;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
};
