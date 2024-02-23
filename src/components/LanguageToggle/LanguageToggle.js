import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === "en" ? "Español" : "English"}
    </button>
  );
};

export default LanguageToggle;
