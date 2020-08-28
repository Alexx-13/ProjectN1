import React from "react";

import MainAnimtion from "./MainAnimation";

import "../styles/Main.scss";
import myAvatart from "../assets/images/my-avatar.svg";
import studentStart from "../assets/images/student-start-logo.svg";
import htmlLogo from "../assets/images/html-5-logo.svg";

export default function Main(){
  return(
    <div className="main">

      <div className="main_section" id="section-a">
        <div className="main_section_left" id="section-a_left">
          <div id="section-a_left_container">
            <div id="section-a_left_container_message-first">
              <h3>Hello!</h3>
              <h4>My name is Aliaksei Kernoha, or just Alex. 
                I am a Belarusian junior software ingenieur, with passion for what I do.
              </h4>
            </div>
            <div id="section-a_left_container_message-second">
              <h4>This project is a representation of my way and plans.</h4>
            </div>
          </div>
        </div>
        <div className="main_section_right" id="section-a_right">
          <img src={myAvatart}></img>
        </div>
      </div>

      <div className="main_section" id="section-b">
        <h1>My way to the goal</h1>
        <MainAnimtion />
        {/* <img src={studentStart} className="importantLogo"></img> */}
        {/* <div className="main_section_left" id="section-b_left">
          <div id="section-b_left_container">
            <div id="section-b_left_container_block-first">
              <img src={htmlLogo} className="unimportantLogo"></img>
            </div>
          </div>
        </div>
        <div className="main_section_right" id="section-main_section_right">
          <div id="section-b_right_container">
            <div id="section-b_right_container_block-first">
              <img src={htmlLogo} className="unimportantLogo"></img>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="main_section" id="section-c">
      </div>
      <div className="main_section" id="section-d">
      </div> */}
    </div>
  )
};