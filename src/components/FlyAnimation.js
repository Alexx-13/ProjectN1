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
  // const circleAnimation = (e) => {
  //   console.log(e.target)
  //   e.target.classList.add("animated-figure")
  //   console.log(e.target)
  // };

  return(
    <li 
    //   onClick={(e) => {
    //   circleAnimation(e)
    // }} 
    />
  )
};