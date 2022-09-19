import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import "./i18n";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
