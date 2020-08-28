import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import "../styles/MainAnimtion.scss";
import student from "../assets/images/student-start-logo.svg"

export default function MainAnimtion(){
  const studentRadius = "60";
  const wayIconsRadius = "40";
  const completedRadius = "90"
  const alignCenter = "50%";


  const SvgCircle = (parameters) => {
    console.log(parameters)
    return(
        <circle
        className={parameters.classProp}
        cx={parameters.x}
        cy={parameters.y}
        r={parameters.radius}
        fill={parameters.fill}
        />
    )
  }

  return(
    <div className="main-animation">
      <svg width="100%" height="100%">
        
        <SvgCircle
          classProp="student-circle"
          x={alignCenter}
          y="100"
          radius={studentRadius}
          fill="blue"
        />
        <SvgCircle
          classProp="student-circle"
          x={alignCenter}
          y="250"
          radius={wayIconsRadius}
          fill="red"
        />
        <SvgCircle
          classProp="student-circle"
          x={alignCenter}
          y="400"
          radius={wayIconsRadius}
          fill="red"
        />
        <SvgCircle
          classProp="student-circle"
          x={alignCenter}
          y="550"
          radius={wayIconsRadius}
          fill="red"
        />
         <SvgCircle
          classProp="student-circle"
          x={alignCenter}
          y="700"
          radius={wayIconsRadius}
          fill="red"
        />
         <SvgCircle
          classProp="student-circle"
          x={alignCenter}
          y="950"
          radius={completedRadius}
          fill="yellow"
        />
    </svg>
    </div>
  )
}