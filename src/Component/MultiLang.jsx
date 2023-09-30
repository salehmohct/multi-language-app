import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "./I18next";
const MultiLang = () => {
  const { t } = useTranslation();
  return (
    <>
      <button
        // onClick={() =>
        //   i18n.language === "en"
        //     ? i18n.changeLanguage("ar")
        //     : i18n.changeLanguage("en")
        // }
        onClick={() => {
          i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
        }}
      >
        Change Lang
      </button>
      <h2>{t("Welcome to React")}</h2>
      <h2>{t("Your name")}</h2>
    </>
  );
};

export default MultiLang;
