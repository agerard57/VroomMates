import { useContext } from "react";

import { ModalContext } from "../contexts";
import { UseModalManager } from "../types";

export function useModal(): UseModalManager {
  const manager = useContext(ModalContext);
  if (!manager) throw new Error("useModal must be nested in a ModalProvider");
  return manager;
}
