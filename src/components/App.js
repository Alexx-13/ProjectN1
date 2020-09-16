import React from "react";
import '../styles/App.scss';

// import Prallaps from "./Prallaps";
import Navbar from "./Navbar";
import Main from "./Main";
// import ModuleWindow from "./ModuleWindow";

export default function App() {

  return (
    <div className="App">
      <Navbar />
    
      <div className="App_container">
        <Main />
      </div>

    </div>
  )
};