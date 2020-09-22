import React from "react";
import { useTranslation } from 'react-i18next';
import myAvatart from "../assets/images/my-avatar.svg";
import finger from "../assets/images/finger-logo.svg"
import "../styles/Head.scss";

export default function Head(){
  const { t, i18n } = useTranslation();

  const scrollLow = () => {
    document.querySelector(".main_section h1").scrollIntoView({block: "center", behavior: "smooth"});
  }

  return(
    <div className="main_section" id="section-a">
      <div className="extra-div">
        <div className="main_section_left" id="section-a_left">
          <img 
            src={myAvatart} 
          />
        </div>
        <div className="main_section_right" id="section-a_right">
          <div id="section-a_right_container">
            <div id="section-a_right_container_message-first">
              <h3>{t('MainGreetings')}</h3>
              <h4>{t('MainParagraphA')}</h4>
            </div>
            <div id="section-a_right_container_message-second">
              <h4>{t('MainParagraphB')}</h4>
            </div>
          </div>
        </div>
      </div>
   
      <img id="finger-img" 
        src={finger}             
        onClick={() => {
          scrollLow()
        }} 
      />
  </div>
  )
};