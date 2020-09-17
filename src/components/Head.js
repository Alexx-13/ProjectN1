import React from "react";
import { useTranslation } from 'react-i18next';
import myAvatart from "../assets/images/my-avatar.svg";
import "../styles/Head.scss";

export default function Head(){
  const { t, i18n } = useTranslation();

  return(
    <div className="main_section" id="section-a">
      <div className="main_section_left" id="section-a_left">
        <div id="section-a_left_container">
          <div id="section-a_left_container_message-first">
            <h3>{t('MainGreetings')}</h3>
            <h4>{t('MainParagraphA')}</h4>
          </div>
          <div id="section-a_left_container_message-second">
            <h4>{t('MainParagraphB')}</h4>
          </div>
        </div>
      </div>
      <div className="main_section_right" id="section-a_right">
        <img src={myAvatart}></img>
      </div>
  </div>
  )
};