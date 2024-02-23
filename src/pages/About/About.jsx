import { useTranslation } from "react-i18next";
import "./about.scss";

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("aboutUs")}</h2>
      <p>{t("aboutUsBody")}</p>
    </div>
  );
}
