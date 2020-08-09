import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "assets/locales/en-US.json";
import vn from "assets/locales/vi-VN.json";

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vn,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
