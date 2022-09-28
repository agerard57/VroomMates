import { i18n as AddTripModal } from "../addTripModal";
import { i18n as AdminUserListPage } from "../adminUserListPage";
import { i18n as BecomeDriverModal } from "../becomeDriverModal";
import { i18n as CloseAccountModal } from "../closeAccountModal";
import { i18n as Core } from "../core";
import { i18n as Dashboard } from "../dashboard";
import { i18n as ErrorScreen } from "../errorScreen";
import { i18n as LandingPage } from "../landingPage";
import { i18n as LoadingScreen } from "../loadingScreen";
import { i18n as PaymentRecapPage } from "../paymentRecapPage";
import { i18n as PoliciesPages } from "../policiesPages";
import { i18n as ProfilePage } from "../profilePage";
import { i18n as RegisterCompleteModal } from "../registerCompleteModal";
import { i18n as RegisterPage } from "../registerPage";
import { i18n as ReviewsPages } from "../reviewsPages";
import { i18n as SearchPage } from "../searchPage";
import { i18n as SignInPage } from "../signInPage";
import { i18n as TripDetailsPage } from "../tripDetailsPage";
import { i18n as TripsPage } from "../tripsPage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  AddTripModal,
  AdminUserListPage,
  BecomeDriverModal,
  CloseAccountModal,
  Core,
  Dashboard,
  ErrorScreen,
  LandingPage,
  LoadingScreen,
  PaymentRecapPage,
  PoliciesPages,
  ProfilePage,
  RegisterCompleteModal,
  RegisterPage,
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
