import i18n from "i18next";
// import langs from "../assets/langs.json";
import { initReactI18next } from "react-i18next";
import en from "../assets/Langs/en.json";
import ar from "../assets/Langs/ar.json";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // resources: { ...langs },
    resources: { ...en, ...ar },
    // resources: langs,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
