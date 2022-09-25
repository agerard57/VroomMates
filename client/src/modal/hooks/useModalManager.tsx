import { useState } from "react";

import { EmptyModal } from "../components";
import { SlideSpec, UseModalManager } from "../types";

export const useModalManager = (): UseModalManager => {
  const emptySlideSpec: SlideSpec[] = [
    { content: <EmptyModal />, nextButtonText: "" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalName, setModalName] = useState<string>("");
  const [slideSpecs, setSlideSpecs] = useState<SlideSpec[]>(emptySlideSpec);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [slideNumber, setSlideNumber] = useState<number>(0);

  const openModal = (slideSpecs: SlideSpec[], name: string) => {
    setModalName(name);
    setSlideNumber(0);
    setSlideSpecs(slideSpecs);
    setIsOpen(true);
    setIsDisabled(false);
  };

  const previous = () => {
    slideSpecs[slideNumber].previousButtonAction?.();
    if (slideNumber === 0) closeModal();
    else setSlideNumber(slideNumber - 1);
  };
  const last = slideSpecs.length - 1;
  const next = () => {
    slideSpecs[slideNumber].nextButtonAction?.();
    if (slideNumber === last) closeModal();
    else setSlideNumber(slideNumber + 1);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSlideSpecs(emptySlideSpec);
    setSlideNumber(0);
    setIsDisabled(false);
  };

  return {
    modalName,
    isOpen,
    slideSpecs,
    openModal,
    closeModal,
    iterator: { previous, slideNumber, next },
    isDisabled,
    setIsDisabled,
  };
};
