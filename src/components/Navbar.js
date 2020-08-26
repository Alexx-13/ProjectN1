import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import '../styles/Navbar.scss';

export default function Navbar(props){
  const { t, i18n } = useTranslation();
  const [ showDropDown, setShowDropDown ] = useState(false);
  const [ switchLanguage, setSwitchLanguage ] = useState("EN");

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const LangBtn = (props) => {
    return(
      <button
        className="langBtn"
        onClick={() => {
          changeLanguage(props.language);
          setSwitchLanguage(props.language);
          setShowDropDown(false)
        }}
      >
        {props.name}
      </button>
    )
  };

  const handleScroll = () => {
    alert(window.pageYOffset)
  }


  return(
    <nav className="navbar">
      <div className="navbar_left">
        <div className="navbar_left_logo">
          <h2>LOGO</h2>
        </div>
        <div className="navbar_left_lang">
          <button
            onClick={() => {setShowDropDown(!showDropDown); handleScroll()}}
          >
            {switchLanguage}
          </button>
          {showDropDown ?
            <ul>
              <li>
                <LangBtn 
                  language="EN" 
                  name="English"
                />
              </li>
              <li>
                <LangBtn 
                  language="RU" 
                  name="Русский"
                />
              </li>
            </ul>      
          : null}
        </div>
      </div>
      
      <div className="navbar_right">
        <div className="navBar_right_menu">
          <button>EXAMPLES</button>
          <button>CHANGE THEME</button>
        </div>
      </div>

    </nav>
  )
};