import React from "react";
import { useTranslation } from 'react-i18next';
import '../styles/App.scss';

import Prallaps from "./Prallaps"

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <h1>My React App!</h1>
      <small>Something</small>
      <Prallaps />
      <p>{t('paragraph')}</p>
        <button className="btn" onClick={() => changeLanguage('en')}>english</button>
        <button className="btn" onClick={() => changeLanguage('hn')}>hindi</button>
        <button className="btn" onClick={() => changeLanguage('sp')}>spanish</button>
        <button className="btn" onClick={() => changeLanguage('fr')}>french</button>
    </div>
  );
}

export default App;