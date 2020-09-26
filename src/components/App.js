import React, { useState } from 'react';
import '../styles/App.scss';

import AppPreloader from './AppPreloader';
import Coat from './Coat';
import Navbar from './Navbar';
import Head from './Head';
import Main from './Main';
import Footer from './Footer';
import SimpleChatBot from './SimpleChatBot';

export default function App() {
  const [appearCoat, setAppearCoat] = useState(false)
  return (
    <div className="App">
      {/* <AppPreloader /> */}
      {appearCoat ? <Coat appearCoat={setAppearCoat}/> : null}
      <div className="pre-App">
        <Navbar appearCoat={setAppearCoat}/>
        <Head />
        <div className="App_container">
          <Main />
        </div>
        <SimpleChatBot />
        <Footer />
      </div>
    </div>
  );
}
