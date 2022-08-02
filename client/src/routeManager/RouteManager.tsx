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

const RouteManager: FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  </Router>
);

export default RouteManager;
