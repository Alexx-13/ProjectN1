import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import ScrollIndicator from "./ScrollIndictor";
import ModuleWindow from "./ModuleWindow";

import '../styles/Navbar.scss';

import englishFlag from "../assets/images/english-flag-logo.svg";
import russianFlag from "../assets/images/russian-flag-logo.svg";

export default function Navbar(props){
  const { t, i18n } = useTranslation();
  const [logoContentA, setLogoContentA] = useState("Vi");
  const [logoContentB, setLogoContentB] = useState("sitC")
  const [switchLanguage, setSwitchLanguage] = useState("English");
  const [showModuleWindow, setShowModuleWindow] = useState(false);
  const [switcherFlag, setSwitcherFlag] = useState(true);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const scrollToATop = () => {
    document.querySelector("#section-a").scrollIntoView({block: "center", behavior: "smooth"});
  };

  const changeFlag = () => {
    if(switcherFlag === true){
      document.querySelector(".switch").style.backgroundImage = `url(${englishFlag})`;
      changeLanguage("EN")
    } else if (switcherFlag === false){
      document.querySelector(".switch").style.backgroundImage = `url(${russianFlag})`;
      changeLanguage("RU")
    }
  }

  useEffect(() => {
    changeFlag()
  }, [switcherFlag])

  return(
    <div className="header-block">

      <nav className="navbar">
        
        <div className="navbar_left">
          <div className="navbar_left_logo">
            <h2
              onClick={() => {
                scrollToATop()
              }}
              onMouseEnter={() => {
                setLogoContentA("CV")
                setLogoContentB("isit")
              }}
              onMouseLeave={() => {
                setLogoContentA("Vi")
                setLogoContentB("sitC")
              }}
            >
              <i>{logoContentA}</i>{logoContentB}
            </h2>
          </div>

          <div className="toggle">
            <input type="checkbox" className="check" onClick={() => {
                setSwitcherFlag(!switcherFlag)
            }}/>
            <b className="b switch" />
            <b className="b track" />
          </div>
        </div>
        
        <div className="navbar_right">
          <div className="navbar_right_menu">
            <button onClick={() => {
              setShowModuleWindow(!showModuleWindow)
            }}>
              {t('NavbarExamples')}
            </button>
          </div>
        </div>

      </nav>
      <ScrollIndicator />
      {showModuleWindow ? 
        <ModuleWindow updateShowModuleWindow={setShowModuleWindow}/>
      : null}
    </div>
   
  )
};