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
import { ReviewsPages } from "../../reviewsPages";
import { SearchPage } from "../../searchPage";
import { SignInPage } from "../../signInPage";
import { TripDetailsPage } from "../../tripDetailsPage";
import { TripsPage } from "../../tripsPage";
import { useRouteManager } from "../hooks";

const RouteManager: FC = () => {
  const { isUserLoggedIn, loggedUserData, isLoading } = useRouteManager();
  console.error(isUserLoggedIn, loggedUserData); // TODO Remove

  if (isLoading) return <LoadingScreen />;

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/user/:id" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/policies" element={<PoliciesPages />} />
          <Route path="/profile/view" element={<ProfilePage />} />
          <Route path="/trip/:id" element={<TripDetailsPage />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/reviews/given" element={<ReviewsPages />} />
          <Route path="/reviews/received" element={<ReviewsPages />} />
          <Route path="/profile/login" element={<SignInPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default RouteManager;
