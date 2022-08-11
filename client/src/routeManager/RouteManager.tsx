import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Layout } from "../core";
import { Dashboard } from "../dashboard";
import { LandingPage } from "../landingPage";
import { SearchPage } from "../searchPage";
import { SignInPage } from "../signInPage";
import { TripDetailsPage } from "../tripDetailsPage";

const RouteManager: FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/trip/:id" element={<TripDetailsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/login" element={<SignInPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default RouteManager;
