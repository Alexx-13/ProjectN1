import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/About.scss';

export default function About(){
  const { t, i18n } = useTranslation();

  return(
    <div className="about">
      <div className="about_title">
        <div className="about_title_left" />
        <h2>{t('FooterAboutTitle')}</h2>
        <div className="about_title_right" />
      </div>
      <div className="about_content" id="first-about">
        <div id="seporator">
          <AboutBlock text={t('FooterAboutText1')}/>
          <AboutBlock text={t('FooterAboutText2')}/>
        </div>
        <div id="seporator">
          <AboutBlock text={t('FooterAboutText3')}/>
          <AboutBlock text={t('FooterAboutText4')}/>
        </div>
      </div>
      <div className="about_content" id="second-about">
        <div id="seporator">
          <AboutBlock text={t('FooterAboutText5')}/>
          <AboutBlock text={t('FooterAboutText6')}/>
        </div>
        <div id="seporator"> 
          <AboutBlock text={t('FooterAboutText7')}/>
          <AboutBlock text={t('FooterAboutText8')}/>
        </div>
       
      </div>
    </div>
  );
}

const AboutBlock = (props) => {
  const [unHoverd, setUnHoverd] = useState(true);
  const [aboutClassName, setAboutClassName] = useState("about_content_block");
  

  return(
    <div className={aboutClassName}
      onMouseEnter={() => {
        setUnHoverd(false);
        setAboutClassName("about_content_block hoverd-block")
      }}
    >
      {unHoverd ? 
        <h3>?</h3> 
      : <h3>{props.text}</h3>}
    </div>
  );
}