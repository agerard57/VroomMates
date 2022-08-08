import { i18n as core } from "../core";
import { i18n as Dashboard } from "../dashboard";
import { i18n as LandingPage } from "../landingPage";
import { i18n as LoadingScreen } from "../loadingScreen";
import { i18n as SearchPage } from "../searchPage";

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
  core,
  Dashboard,
  SearchPage,
  LoadingScreen,
  LandingPage,
});

export const resources = {
  fr: { ...moduleResources.fr },
  en: { ...moduleResources.en },
};
