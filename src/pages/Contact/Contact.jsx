import { useTranslation } from "react-i18next";

import "./contact.scss";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("contact")}</h2>
      <p>{t("contactBody")}</p>
    </div>
  );
}
