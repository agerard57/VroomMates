import { createContext } from "react";

import { UseModalManager } from "../types";

export const ModalContext = createContext<UseModalManager | null>(null);
