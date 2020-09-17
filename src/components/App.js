import React from "react";
import '../styles/App.scss';

import Navbar from "./Navbar";
import Main from "./Main";
import Head from "./Head";

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Head />
      <div className="App_container">
        <Main />
      </div>

    </div>
  )
};