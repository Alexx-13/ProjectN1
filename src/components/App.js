import React from 'react';
import '../styles/App.scss';

import AppPreloader from './AppPreloader';
import Navbar from './Navbar';
import Head from './Head';
import Main from './Main';
import Footer from './Footer';
import SimpleChatBot from './SimpleChatBot';

export default function App() {
  return (
    <div className="App">
      <AppPreloader />
      <div className="pre-App">
        <Navbar />
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
