import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import EN from "./assets/languages/en.json";
import RU from "./assets/languages/ru.json";

const resources = {
  EN: {
    translation: EN
  },
  RU: {
    translation: RU
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'EN',
    fallbackLng: 'RU',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;