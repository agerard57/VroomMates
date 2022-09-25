import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import MediaQuery from "react-responsive";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AdminUserListPage } from "../../adminUserListPage";
import { Desktop, LandscapeMode, Layout } from "../../core";
import { Dashboard } from "../../dashboard";
import { ErrorScreen } from "../../errorScreen";
import { LandingPage } from "../../landingPage";
import { PoliciesPages } from "../../policiesPages";
import { ProfilePage } from "../../profilePage";
import { RegisterPage } from "../../registerPage";
import { ReviewsPages } from "../../reviewsPages";
import { SearchPage } from "../../searchPage";
import { SignInPage } from "../../signInPage";
import { TripDetailsPage } from "../../tripDetailsPage";
import { TripsPage } from "../../tripsPage";
import { useRouteManager } from "../hooks";
import { ProtectedRoute } from "./ProtectedRoute";

const RouteManager: FC = () => {
  const { isUserLoggedIn, loggedUserData, isUserAdmin } = useRouteManager();

  return (
    <Router>
      <MediaQuery minDeviceWidth={1224}>
        <Desktop />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224} orientation="landscape">
        <LandscapeMode />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224} orientation="portrait">
        <Layout>
          <ErrorBoundary FallbackComponent={ErrorScreen}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route
                path="/dashboard"
                element={<Dashboard loggedUserData={loggedUserData} />}
              />
              <Route path="/home" element={<LandingPage />} />
              <Route
                path="/user/:id"
                element={
                  <ProtectedRoute isAllowed={isUserLoggedIn}>
                    <ProfilePage loggedUserData={loggedUserData} />
                  </ProtectedRoute>
                }
              />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/policies" element={<PoliciesPages />} />
              <Route
                path="/profile/view"
                element={
                  <ProtectedRoute isAllowed={isUserLoggedIn}>
                    <ProfilePage loggedUserData={loggedUserData} />
                  </ProtectedRoute>
                }
              />
              <Route path="/trip/:id" element={<TripDetailsPage />} />
              <Route
                path="/trips"
                element={
                  <ProtectedRoute isAllowed={isUserLoggedIn}>
                    <TripsPage loggedUserData={loggedUserData} />
                  </ProtectedRoute>
                }
              />
              <Route path="/profile/register" element={<RegisterPage />} />
              <Route
                path="/reviews/given"
                element={
                  <ProtectedRoute isAllowed={isUserLoggedIn}>
                    <ReviewsPages loggedUserData={loggedUserData} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/reviews/received"
                element={
                  <ProtectedRoute isAllowed={isUserAdmin}>
                    <ReviewsPages loggedUserData={loggedUserData} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/user-list"
                element={
                  <ProtectedRoute isAllowed={isUserLoggedIn}>
                    <AdminUserListPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/profile/login" element={<SignInPage />} />
            </Routes>
          </ErrorBoundary>
        </Layout>
      </MediaQuery>
    </Router>
  );
};

export default RouteManager;
