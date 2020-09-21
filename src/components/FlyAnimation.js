import React from "react";
import "../styles/FlyAnimation.scss";

export default function FlyAnimation(){

  return(
    <div className="fly-animation">
      <ul className="fly-animation_circles">
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
        <AnimationFigure />
      </ul>
    </div>
  )
};

const AnimationFigure = () => {
  // const disappearOnClick = (e) => {
  //   console.log(e)
  //   e.target.classList.add("disappear-circle")
  // };
  
  return(
    <li 
      // onClick={(e) => {
      //   disappearOnClick(e)
      // }}
    />
  )
};