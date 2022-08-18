import { i18n as Core } from "../core";
import { i18n as Dashboard } from "../dashboard";
import { i18n as LandingPage } from "../landingPage";
import { i18n as LoadingScreen } from "../loadingScreen";
import { i18n as PoliciesPages } from "../policiesPages";
import { i18n as ProfilePage } from "../profilePage";
import { i18n as ReviewsPages } from "../reviewsPages";
import { i18n as SearchPage } from "../searchPage";
import { i18n as SignInPage } from "../signInPage";
import { i18n as TripDetailsPage } from "../tripDetailsPage";
import { i18n as TripsPage } from "../tripsPage";

type Modules = Record<string, { fr: any; en: any }>;

const normalize = (
  modules: Modules,
  formatNamespace: (name: string) => string = (name) => name
) =>
  Object.entries(modules).reduce(
    ({ fr, en }, [namespace, translations]) => ({
      fr: { ...fr, [formatNamespace(namespace)]: translations.fr },
      en: { ...en, [formatNamespace(namespace)]: translations.en },
    }),
    { fr: {}, en: {} }
  );

const moduleResources = normalize({
  Core,
  Dashboard,
  LandingPage,
  LoadingScreen,
  PoliciesPages,
  ProfilePage,
  ReviewsPages,
  SearchPage,
  SignInPage,
  TripDetailsPage,
  TripsPage,
});

export const resources = {
  fr: { ...moduleResources.fr },
  en: { ...moduleResources.en },
};
