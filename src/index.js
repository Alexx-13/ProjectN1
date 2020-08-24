import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import * as serviceWorker from './serviceWorker';

import {IntlProvider} from "react-intl";
import locale_en from "./translations/en.json";
import locale_ru from "./translations/ru.json";

const data = {
  'ru': locale_ru,
  'en': locale_en
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <IntlProvider locale={language} messages={data[language]}>
    <App />
  </IntlProvider>, 
  document.getElementById("root")
);

serviceWorker.unregister();