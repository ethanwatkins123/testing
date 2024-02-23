import { useTranslation } from "react-i18next";
import Grid from "../../components/Grid/Grid";
import "./home.scss";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h2>{t("welcome")}</h2>
      <p>{t("welcomeBody")}</p>
      <Grid />
    </div>
  );
}
