import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy } from "react";
import { FC, Suspense } from "react";
import { I18nextProvider } from "react-i18next";

import "./App.css";
import { i18n } from "./i18n";
import { LoadingScreen } from "./loadingScreen";
import { ModalProvider } from "./modal";

const RouteManager = lazy(() => import("./routeManager"));

export const App: FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <I18nextProvider i18n={i18n}>
        <ModalProvider>
          <RouteManager />
        </ModalProvider>
      </I18nextProvider>
    </Suspense>
  );
};
