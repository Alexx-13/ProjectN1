import React from "react";
import { useTranslation } from 'react-i18next';
import '../styles/App.scss';

// import Prallaps from "./Prallaps";
import Navbar from "./Navbar";
import Main from "./Main";

function App() {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="App">
      <Navbar />
      <div className="App_container">

        {/* <h1>My wat to the goal</h1>
        <p>{t('paragraph')}</p> */}
        <Main />
        {/* <Prallaps /> */}

        
      </div>
    </div>
  );
}

export default App;