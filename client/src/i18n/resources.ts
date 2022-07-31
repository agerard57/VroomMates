import { i18n as core } from "../core";
import { i18n as LandingPage } from "../landingPage";
import { i18n as LoadingScreen } from "../loadingScreen";

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
  LoadingScreen,
  LandingPage,
});

export const resources = {
  fr: { ...moduleResources.fr },
  en: { ...moduleResources.en },
};
