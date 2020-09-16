import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import "../styles/ModuleWindow.scss";

import arrowRight from "../assets/images/arrows/arrow-right.svg";
import arrowLeft from "../assets/images/arrows/arrow-left.svg";

export default function ModuleWindow(props){
  const { t, i18n } = useTranslation();

  return(
    <div className="module-window activated-modal">
        <div className="module-window_hard">
          <h3>Hard Skills
            <button
              onClick={() => {props.updateShowModuleWindow(false)}}
            >X
            </button>
            </h3>
          <SkillsSlider 
            textA="a1111111111111111"
            textB="a2222222222222222"
            textC="a3333333333333333"
          />
        </div>
        <div className="module-window_soft">
          <h3>Soft Skills</h3>
          <SkillsSlider 
            textA="b1111111111111111"
            textB="b2222222222222222"
            textC="b3333333333333333"
          />
        </div>
    </div>
  )
}

function SkillsSlider(parameters){
  const [index, setIndex] = useState(0)
  const textArray = [parameters.textA, parameters.textB, parameters.textC];

  const increaseIndex = () => {
    if(index === 0 || index < 2){
      setIndex(index + 1)
    }
  };

  const decreaseIndex = () => {
    if(index > 0 || index > 2){
      setIndex(index - 1)
    }
  };

  return(
    <div className="skills-slider">
      <button onClick={() => {decreaseIndex()}}><img src={arrowLeft}></img></button>
      <div className="skills-slider_list">
        <SkillsList
          text={textArray[index]}
        />
      </div>
      <button onClick={() => {increaseIndex()}}><img src={arrowRight}></img></button>
    </div>
  )
};

const SkillsList = (props) => {
  return(
    <p>{props.text}</p>
  )
};