import { i18n as core } from "../core";
import { i18n as LoadingScreen } from "../loadingScreen";

type Modules = Record<string, { fr: any; en: any }>; // eslint-disable-line @typescript-eslint/no-explicit-any

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
});

export const resources = {
  fr: { ...moduleResources.fr },
  en: { ...moduleResources.en },
};
