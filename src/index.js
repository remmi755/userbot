import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import './i18n';

import  i18n from "react";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

// i18n
//     .use(initReactI18next) // passes i18n down to react-i18next
//     .use(LanguageDetector)
//     .use(HttpApi)
//     .init({
//         supportedLngs: ['ru','ua'],
//         fallbackLng: "ru",
//         detection: {
//             order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
//             caches: ['cookie']
//         },
//         backend: {
//             loadPath: '/assets/locales/{{lng}}/translation.json',
//         },
//
//
//     });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
