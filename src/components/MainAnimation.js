import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

import "../styles/MainAnimtion.scss";

import student from "../assets/images/student-start-logo.svg";
import boostedStudent from "../assets/images/student-first-doc-logo.svg";

import html from "../assets/images/html-5-logo.svg";
import css from "../assets/images/css-logo.svg";
import scss from "../assets/images/sass-logo.svg";
import webpack from "../assets/images/webpack-logo.svg";
import rss from "../assets/images/rsschool-logo.svg";
import diploma from "../assets/images/diploma-doc-logo.svg";
import diplomaNHat from "../assets/images/diploma-head-n-doc-logo.svg";


export default function MainAnimtion(){
  const [ windowHeight, setWindowHeight ] = useState(window.pageYOffset)
  const [ studentXPosition, setStudentXPosition ] = useState("440");
  const [ studentYPosition, setStudentYPosition ] = useState("0");
  const [ fromStudent, setFromStudent ] = useState("0 0");
  const [ toStudent, setToStudent ] = useState("0 0");

  const [ firstGraduationXPosition, setFirstGraduationXPosition ] = useState("300")
  const [ firstGraduationYPosition, setFirstGraduationYPosition ] = useState("900") // Perhaps Y could be always the same
  const [ secondGraduationXPosition, setSecondGraduationXPosition ] = useState("700")
  const [ secondGraduationYPosition, setSecondGraduationYPosition ] = useState("900")  // Perhaps Y could be always the same

  const studentRadius = "60";
  const wayIconsRadius = "40";
  const completedRadius = "90";

  const alignCenter = "500";
  const goalAlignCenter = "430";

  const studentIconSize = "25%";
  const generalIconSize = "15%";
  const goalIconSize = "35%";

  const transfromTypeStudent = "translate";

  const SvgCircleImage = (parameters) => {
    return(
      <image
        className={parameters.classProp}
        x={parameters.x}
        y={parameters.y}
        width={parameters.width}
        height={parameters.hight}
        r={parameters.radius}
        xlinkHref={parameters.image}
      >
        <animateTransform
          attributeName="transform"
          type={parameters.type}
          from={parameters.from}
          to={parameters.to}
          begin="0s"
          dur="2s"
          repeatCount="indefinite"
        />
      </image>
    )
  };

  const getVerticalScrollPercentage = (element) => {
    let p = element.parentNode,
      pos = (element.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;

    if(Math.round(pos) === 20){
      setToStudent("0 700")
    } else if (Math.round(pos) < 20){
      setToStudent("0 0")
    };
      
    return Math.round(pos) + "%";
  };

  const returnScrollPercentages = () => {
    setWindowHeight(getVerticalScrollPercentage(document.body));
  };















  useEffect(() => {
    window.addEventListener("scroll", returnScrollPercentages);
  
    return () => {
      window.removeEventListener("scroll", returnScrollPercentages);
    }
  }, []);

  return(
    <div className="main-animation">
      {windowHeight}
      <div className="testi"></div>
      <svg width="100%" height="100%">

      <g>
      <SvgCircleImage
          classProp="student-circle"
          x={studentXPosition}
          y={studentYPosition}
          width={studentIconSize}
          height={studentIconSize}
          radius={studentRadius}
          image={student}
          type={transfromTypeStudent}
          from={fromStudent}
          to={toStudent}
        />


        <SvgCircleImage
          classProp="icon-circle"
          x={alignCenter}
          y="250"
          width={generalIconSize}
          height={generalIconSize}
          radius={wayIconsRadius}
          image={html}
        />
        <SvgCircleImage
          classProp="icon-circle"
          x={alignCenter}
          y="400"
          width={generalIconSize}
          height={generalIconSize}
          radius={wayIconsRadius}
          image={css}
        />
        <SvgCircleImage
          classProp="icon-circle"
          x={alignCenter}
          y="550"
          width={generalIconSize}
          height={generalIconSize}
          radius={wayIconsRadius}
          image={scss}
        />
         <SvgCircleImage
          classProp="icon-circle"
          x={alignCenter}
          y="700"
          width={generalIconSize}
          height={generalIconSize}
          radius={wayIconsRadius}
          image={webpack}
        />
        <SvgCircleImage
          classProp="icon-circle"
          x={alignCenter}
          y="550"
          width={generalIconSize}
          height={generalIconSize}
          radius={wayIconsRadius}
          image={scss}
        />

         <SvgCircleImage
          classProp="near-goal-circle"
          x={firstGraduationXPosition}
          y={firstGraduationYPosition}
          width={generalIconSize}
          height={generalIconSize}
          radius={wayIconsRadius}
          image={diploma}
        />
        <SvgCircleImage
          classProp="near-goal-circle"
          x={secondGraduationXPosition}
          y={secondGraduationYPosition}
          width={generalIconSize}
          height={generalIconSize}
          radius={wayIconsRadius}
          image={diplomaNHat}
        />
         <SvgCircleImage
          classProp="goal-circle"
          x={goalAlignCenter}
          y="950"
          width={goalIconSize}
          height={goalIconSize}
          radius={completedRadius}
          image={rss}
        />
      </g>
       

          















    </svg>
    </div>
  )
}