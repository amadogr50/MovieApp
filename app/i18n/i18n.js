import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import resources from './resources';

const languageDetector = {
  type: 'languageDetector',
  detect: () => {
    const locales = RNLocalize.getLocales();
    return locales[0].languageCode || 'en';
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
