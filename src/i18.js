// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome!",
        welcomeBody:
          "Welcome to our platform! Explore, connect, and make the most of your experience with our community.",
        aboutUs: "About Us",
        aboutUsBody:
          "Welcome to our company! We are a passionate team dedicated to delivering innovative solutions and outstanding service to our clients.",
        contact: "Contact",
        contactBody:
          "Feel free to reach out to us with any inquiries, questions, or collaboration opportunities. We're here to assist you!",
        // Add more translations as needed
        navHome: "Home",
        navAbout: "About",
        navContact: "Contact",
      },
    },
    es: {
      translation: {
        welcome: "¡Bienvenido!",
        welcomeBody:
          "¡Bienvenido a nuestra plataforma! Explora, conecta y aprovecha al máximo tu experiencia con nuestra comunidad.",
        aboutUs: "Sobre Nosotros",
        aboutUsBody:
          "¡Bienvenido a nuestra empresa! Somos un equipo apasionado dedicado a ofrecer soluciones innovadoras y un servicio excepcional a nuestros clientes.",
        contact: "Contacto",
        contactBody:
          "No dudes en ponerte en contacto con nosotros ante cualquier consulta, pregunta u oportunidad de colaboración. ¡Estamos aquí para ayudarte!",
        // Add more translations as needed
        navHome: "Inicio",
        navAbout: "Sobre Nosotros",
        navContact: "Contacto",
      },
    },
  },
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
