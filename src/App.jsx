import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18.js";
import LanguageToggle from "./components/LanguageToggle/LanguageToggle.js";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <BrowserRouter>
          <Navbar />
          <LanguageToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </I18nextProvider>
  );
}

export default App;
