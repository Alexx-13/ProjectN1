import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { returnScrollPercentages } from '../helpfullFunctions/countPercentages';

import MainAnimtion from './MainAnimation';
import SideLinks from './SideLinks';

import '../styles/Main.scss';

export default function Main() {
  const { t, i18n } = useTranslation();
  const [sidelinks, setSideLinks] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setWindowHeight(returnScrollPercentages);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setWindowHeight(returnScrollPercentages);
      });
    };
  }, []);

  useEffect(() => {
    if (windowHeight > 10 && windowHeight < 97) {
      setSideLinks(true);
    } else {
      setSideLinks(false);
    }
  }, [windowHeight]);


  return (
    <div className="main">
      <div className="cursor"></div>
      {sidelinks
        ? <SideLinks />
        : null}
      <div className="main_section" id="section-b">
        <h1>
          {t('MainHeadingA')}
          <br />
          {t('MainHeadingB')}
        </h1>

        <MainAnimtion />
        
      </div>
    </div>
  );
}
