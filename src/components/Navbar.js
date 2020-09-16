import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import ScrollIndicator from "./ScrollIndictor";
import ModuleWindow from "./ModuleWindow";

import '../styles/Navbar.scss';

export default function Navbar(props){
  const { t, i18n } = useTranslation();
  const [showDropDown, setShowDropDown] = useState(false);
  const [switchLanguage, setSwitchLanguage] = useState("English");
  const [showModuleWindow, setShowModuleWindow] = useState(false);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const LangBtn = (props) => {
    return(
      <button
        className="langBtn"
        onClick={() => {
          changeLanguage(props.language);
          setSwitchLanguage(props.fullName);
          setShowDropDown(false);
        }}
      >
        {props.language}
      </button>
    )
  };

  return(
    <div className="header-block">

      <nav className="navbar">
        
        <div className="navbar_left">
          <div className="navbar_left_logo">
            <h2>{t('NavbarLogoName')}</h2>
          </div>

          <div className="navbar_left_lang"
            onMouseEnter={() => {
              setShowDropDown(true);
            }}
            onMouseLeave={() => {setShowDropDown(false)}}
          >
            <button
              id="main-lang-btn"
              onClick={() => {setShowDropDown(!showDropDown)}}
            >
              {switchLanguage}
            </button>
            {showDropDown && switchLanguage === "English" ?
              <ul>
                <li>
                  <LangBtn 
                    language="RU" 
                    fullName="Русский"
                  />
                </li>
              </ul>      
            : showDropDown && switchLanguage === "Русский"  ? 
            <ul>
                <li>
                  <LangBtn 
                    language="EN" 
                    fullName="English"
                  />
                </li> 
              </ul>     
            : null}
          </div>
        </div>
        
        <div className="navbar_right">
          <div className="navbar_right_menu">
            <button onClick={() => {
              setShowModuleWindow(!showModuleWindow)
            }}>
              {t('NavbarExamples')}
            </button>
            <div className="toggle">
              <input type="checkbox" className="check" />
              <b className="b switch"></b>
              <b className="b track"></b>
            </div>
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