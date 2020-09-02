import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

import "../styles/MainAnimtion.scss";

import student from "../assets/images/student-start-logo.svg";
import boostedStudent from "../assets/images/student-first-doc-logo.svg";

import html from "../assets/images/html-5-logo.svg";
import css from "../assets/images/css-logo.svg";
import scss from "../assets/images/sass-logo.svg";
import js from "../assets/images/js-logo.svg";
import rss from "../assets/images/rsschool-logo.svg";
import diploma from "../assets/images/diploma-doc-logo.svg";
import diplomaNHat from "../assets/images/diploma-head-n-doc-logo.svg";


import react from "../assets/images/react-logo.svg";
import reactHooks from "../assets/images/react-hooks-logo.svg";
import redux from "../assets/images/redux-logo.svg";
// import english from "../assets/images/english-flag-logo.svg";
import webpack from "../assets/images/webpack-logo.svg";
import rssReact from "../assets/images/rss-react-logo.svg";
import victory from "../assets/images/victory-logo.svg";
import personal from "../assets/images/personal-development-logo.svg";

import jest from "../assets/images/jest-logo.svg";
import german from "../assets/images/german-flag-logo.svg";
import figma from "../assets/images/figma-logo.svg";
import svg from "../assets/images/svg-logo.svg";
import junior from "../assets/images/junior-logo.svg";
import specialist from "../assets/images/specialist-logo.svg";
import reached from "../assets/images/reached-goal-logo.svg";


export default function MainAnimtion(){
  const [ windowHeight, setWindowHeight ] = useState(window.pageYOffset);
  const [ studentVisability, setStudentVisability ] = useState(false);
  const [ studentImage, setStudentImage ] = useState(student);

  const [ leftSputnikPermission, setLeftSputnikPermission ] = useState(false);
  const [ rightSputnikPermission, setRightSputnikPermission ] = useState(false);


  const Student = () => {
    return(
      <div className="student" 
        style={{
          backgroundImage: `url(${studentImage})`
        }}
      >
        {windowHeight}
      </div>
    )
  };

  const Content = (parameters) => {
    return(
      <div className="main-animation_content-component">
        <div className="main-animation_content-component_left">
          {leftSputnikPermission ? 
            <SideText 
            text={parameters.leftText}
            id="left-sputnik"
            />
          : null}
        </div>
        <div className="main-animation_content-component_center">
          <div className="main-animation_content-component_center_container">
            <img className="skills-icon" src={parameters.firstIcon}></img>
            <img className="skills-icon" src={parameters.secondIcon}></img>
            <img className="skills-icon" src={parameters.thirdIcon}></img>
            <img className="skills-icon" src={parameters.fourthIcon}></img>
            <div className="main-animation_content-component_center_container_goal">
              <img className="sputnik-icon" src={parameters.leftSputnik}></img>
              <img className="goal" src={parameters.goal}></img>
              <img className="sputnik-icon" src={parameters.rightSputnik}></img>
            </div>
          </div>
        </div>
        <div className="main-animation_content-component_right">
          {rightSputnikPermission ?
            <SideText 
              text={parameters.rightText}
              id="right-sputnik"
            />
          : null}
        </div>
      </div>
    )
  };

  const SideText = (parameters) => {
    return(
      <div className="side-text" id={parameters.id}>
        <p>{parameters.text}</p>
      </div>
    )
  };

  const getVerticalScrollPercentage = (element) => {
    let p = element.parentNode,
      pos = (element.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;
    let percentages = Math.round(pos);
    handleStudentScroll(percentages);
  
    return percentages;
  };

  const returnScrollPercentages = () => {
    setWindowHeight(getVerticalScrollPercentage(document.body));
  };

  const handleStudentScroll = (percentages) => {
    if(percentages >= 10 && percentages < 30){
      setStudentVisability(true)
    } else if (percentages >= 30 && percentages < 70){
      setStudentImage(boostedStudent)
    } else {
      setStudentImage(student)
      setStudentVisability(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      returnScrollPercentages();
    });
  
    return () => {
      window.removeEventListener("scroll", () => {
        returnScrollPercentages();
      });
    }
  }, []);

  return(
    <div className="main-animation">
      

      {studentVisability ? 
        <Student /> 
      : null}

      <Content 
        firstIcon={html}
        secondIcon={css}
        thirdIcon={scss}
        fourthIcon={js}
        leftSputnik={diploma}
        rightSputnik={diplomaNHat}
        leftText="LEFT TEXT"
        rightText="RIGHT TEXT"
        goal={rss}
      />
      <Content 
        firstIcon={react}
        secondIcon={reactHooks}
        thirdIcon={redux}
        fourthIcon={webpack}
        leftSputnik={victory}
        rightSputnik={personal}
        leftText="LEFT TEXT"
        rightText="RIGHT TEXT"
        goal={rssReact}
      />
      <Content 
        firstIcon={jest}
        secondIcon={german}
        thirdIcon={figma}
        fourthIcon={svg}
        leftSputnik={specialist}
        rightSputnik={reached}
        leftText="LEFT TEXT"
        rightText="RIGHT TEXT"
        goal={junior}
      />
    </div>
  )
}