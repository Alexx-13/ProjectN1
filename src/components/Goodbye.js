import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { returnScrollPercentages } from '../helpfullFunctions/countPercentages';
import '../styles/Goodbye.scss';

export default function Goodbye(){
  const [moveClassNameA, setMoveClassNameA] = useState("");
  const [moveClassNameB, setMoveClassNameB] = useState("");
  const [moveClassNameC, setMoveClassNameC] = useState("");
  const { t, i18n } = useTranslation();

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
    if(windowHeight >= 95){
      setMoveClassNameA("goodbye-move-a")
      setMoveClassNameB("goodbye-move-b")
      setMoveClassNameC("goodbye-move-c")
    }
  }, [windowHeight])

  return(
    <div className="goodbye">
        <div className="goodbye_content" id="first-goodbye">
          <div className="goodbye_content_left" />
          <h3 className={moveClassNameA}>{t('FooterGoodbyeA')}</h3>
        </div>
        <div className="goodbye_content" id="second-goodbye">
          <div className="goodbye_content_left" />
          <h3 className={moveClassNameB}>{t('FooterGoodbyeB')}</h3>
        </div>
        <div className="goodbye_content" id="third-goodbye">
          <div className="goodbye_content_left" />
          <h3 className={moveClassNameC}>{t('FooterGoodbyeC')}</h3>
        </div>
    </div>
  );
}