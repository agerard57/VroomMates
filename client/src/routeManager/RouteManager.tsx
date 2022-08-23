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
import { ProfilePage } from "../profilePage";
import { SearchPage } from "../searchPage";
import { TripDetailsPage } from "../tripDetailsPage";
import { TripsPage } from "../tripsPage";

const RouteManager: FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/user/:id" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile/view" element={<ProfilePage />} />
        <Route path="/trip/:id" element={<TripDetailsPage />} />
        <Route path="/trips" element={<TripsPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default RouteManager;
