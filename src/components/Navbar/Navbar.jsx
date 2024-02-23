import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">{t("navHome")}</Link>
        </li>
        <li>
          <Link to="/about">{t("navAbout")}</Link>
        </li>
        <li>
          <Link to="/contact">{t("navContact")}</Link>
        </li>
      </ul>
    </nav>
  );
}
