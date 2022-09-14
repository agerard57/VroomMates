/** @jsxImportSource @emotion/react */
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FC, Suspense } from "react";
import { I18nextProvider } from "react-i18next";

import "./App.css";
import { Toaster } from "./core";
import { i18n } from "./i18n";
import { LoadingScreen } from "./loadingScreen";

const RouteManager = React.lazy(() => import("./routeManager"));

export const App: FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <I18nextProvider i18n={i18n}>
        <Toaster />
        <RouteManager />
      </I18nextProvider>
    </Suspense>
  );
};
