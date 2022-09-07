import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Layout } from "../../core";
import { Dashboard } from "../../dashboard";
import { LandingPage } from "../../landingPage";
import { LoadingScreen } from "../../loadingScreen";
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
  const { isUserLoggedIn, loggedUserData, isLoading } = useRouteManager();

  if (isLoading) return <LoadingScreen />;

  return (
    <Router>
      <Layout>
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
                <ReviewsPages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reviews/received"
            element={
              <ProtectedRoute isAllowed={isUserLoggedIn}>
                <ReviewsPages />
              </ProtectedRoute>
            }
          />
          <Route path="/profile/login" element={<SignInPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default RouteManager;
