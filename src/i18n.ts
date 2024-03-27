import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(HttpBackend)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: `http://localhost:8180/resources/master/account/{{lng}}`,
      parse: (data: string) => {
        const messages = JSON.parse(data);

        const result: Record<string, string> = {};
        messages.forEach((v) => (result[v.key] = v.value));
        return result;
      },
    },
  });

export default i18n;
