import React, { useState, useEffect } from "react";
import "../styles/ScrollIndicator.scss";
import { returnScrollPercentages } from "../helpfullFunctions/countPercentages";

export default function ScrollIndicator(){
  const [windowHeight, setWindowHeight] = useState();

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
    setWindowHeight(returnScrollPercentages)
  }, [windowHeight])


  return(
    <div 
      className="scroll-indicator"
      style={{ width: `${windowHeight}%`}}
    >
      <p></p>
    </div>
  )
}