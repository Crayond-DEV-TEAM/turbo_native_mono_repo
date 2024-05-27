import i18next from 'i18next';
// React i18next
import { initReactI18next, useTranslation } from 'react-i18next';
// translations
import { arJson, enJson } from 'language-translation';
// localstorage
import { localStorage } from 'common-localstorage';

/** Replace this resource data from the message catelog */
const resources = {
  en: {
    translation: enJson,
  },
  ar: {
    translation: arJson,
  },
};

type TResources = keyof typeof resources;

i18next.use(initReactI18next).init({
  debug: true,
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  lng: localStorage.getItem('language') || 'en',
  resources: resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;

export { useTranslation, type TResources };
