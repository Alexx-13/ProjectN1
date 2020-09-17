import React, {useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { returnScrollPercentages } from "../helpfullFunctions/countPercentages";

import MainAnimtion from "./MainAnimation";
import SideLinks from "./SideLinks";

import "../styles/Main.scss";
import myAvatart from "../assets/images/my-avatar.svg";

export default function Main(){
  const { t, i18n } = useTranslation();
  const [sidelinks, setSideLinks] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowHeight(returnScrollPercentages);
    });
  
    return () => {
      window.removeEventListener("scroll", () => {
        setWindowHeight(returnScrollPercentages);
      });
    }
  }, []);

  useEffect(() => {
    if(windowHeight > 20){
      setSideLinks(true)
    }
  }, [windowHeight])

  return(
    <div className="main">
      {sidelinks ?
        <SideLinks />
      : null}
      <div className="main_section" id="section-b">
        <h1>{t('MainHeading')}</h1>
        <MainAnimtion />

      </div>
    </div>
  )
};