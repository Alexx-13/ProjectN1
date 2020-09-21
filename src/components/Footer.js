import React, { useState } from "react";
import SideLinks from "./SideLinks";
import { useTranslation } from 'react-i18next';
import "../styles/Footer.scss";

import vk from "../assets/images/social/vk-soc.svg";
import telegram from "../assets/images/social/telegram-soc.svg";
import github from "../assets/images/social/github-soc.svg";

export default function Footer(){
  const { t, i18n } = useTranslation();

  const [seniorContent, setSeinorContent] = useState("?");
  const [cursor, setCursor] = useState("pointer")
  const [fontSize, setFontSize] = useState("10vw");
  const [appearSeniorText, setAppearSeniorText] = useState(false);

  const vkLink = "https://vk.com/kernoga";
  const tgLink = "https://t.me/alexx__1__3";
  const ghLink = "https://github.com/Alexx-13";

  const changeContent = () => {
    setSeinorContent("Senior Full-stack Developer");
    setFontSize("4vw");
    setAppearSeniorText(true);
    setCursor("auto")
  };

  return(
    <div className="footer">
      <div className="footer_top">
        <div className="footer_top_title">
          <div className="footer_top_title_left" />
          <h2><i>{t('FooterSection')}</i></h2>
          <div className="footer_top_title_right" />
        </div>

        <div className="footer_top_content">
          <div className="footer_top_content_left">
            {appearSeniorText ?
              <SeniorText 
                text={t('FooterGoalA')}
                className="senior-text left-senior"
              />
            : null}
          </div>
          
          <div className="senior-circle activated-senior"
            style={{
              cursor: cursor
            }}
            onClick={() => {
              changeContent()
            }}
          >
            <h2 
              style={{
                fontSize: fontSize
              }}
            >
              {seniorContent}
            </h2>
          </div>

          <div className="footer_top_content_right">
            {appearSeniorText ?
              <SeniorText 
                text={t('FooterGoalB')}
                className="senior-text right-senior"
              />
            : null}
          </div>
        </div>
        
      </div>
      <div className="footer_low">
        <div className="footer_low_links">
          <a href={vkLink} target="_blank"><img src={vk} /></a>
          <a href={tgLink} target="_blank"><img src ={telegram} /></a>
          <a href={ghLink} target="_blank"><img src={github} /></a>
        </div>
      </div>
    </div>
  )
};

const SeniorText = (props) => {
  
  return(
    <div className={props.className}>
      <h2>{props.text}</h2>
    </div>
  )
};