// eslint-disable-next-line import/no-internal-modules
import "bootstrap/dist/css/bootstrap.min.css";
import pMinDelay from "p-min-delay";
import { lazy } from "react";
import { FC, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { I18nextProvider } from "react-i18next";

import "./App.css";
import { i18n } from "./i18n";
import { LoadingScreen } from "./loadingScreen";
import { ModalProvider } from "./modal";

const RouteManager = lazy(() => pMinDelay(import("./routeManager"), 2000));

export const App: FC = () => (
  <I18nextProvider i18n={i18n}>
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerStyle={{ marginTop: "7vh" }}
      toastOptions={{
        duration: 5000,
      }}
    />
    <Suspense fallback={<LoadingScreen />}>
      <ModalProvider>
        <RouteManager />
      </ModalProvider>
    </Suspense>
  </I18nextProvider>
);
