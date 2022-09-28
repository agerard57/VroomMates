import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import "./i18n";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { register } from "./serviceWorkerRegistration";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

register();

reportWebVitals();
