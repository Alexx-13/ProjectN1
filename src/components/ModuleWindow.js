import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/ModuleWindow.scss';

import arrowRight from '../assets/images/arrows/arrow-right.svg';
import arrowLeft from '../assets/images/arrows/arrow-left.svg';
import arrowRightGray from '../assets/images/arrows/arrow-right-gray.svg';
import arrowLeftGray from '../assets/images/arrows/arrow-left-gray.svg';

export default function ModuleWindow(props) {
  const { t, i18n } = useTranslation();

  return (
    <div className="module-window activated-modal">
      <div className="module-window_hard">
        <h3>
          {t('ModuleWindowTitleA')}
          <button
            onClick={() => { props.updateShowModuleWindow(false); }}
          >
            X
          </button>
        </h3>
        <SkillsSlider
          textA={t('ModuleWindowATextA1')}
          textB={t('ModuleWindowATextA2')}
          textC={t('ModuleWindowATextA3')}
        />
      </div>
      <div className="module-window_soft">
        <h3>{t('ModuleWindowTitleB')}</h3>
        <SkillsSlider
          textA={t('ModuleWindowATextB1')}
          textB={t('ModuleWindowATextB2')}
          textC={t('ModuleWindowATextB3')}
        />
      </div>
    </div>
  );
}

function SkillsSlider(parameters) {
  const [index, setIndex] = useState(0);
  const textArray = [parameters.textA, parameters.textB, parameters.textC];

  const increaseIndex = () => {
    if (index === 0 || index < 2) {
      setIndex(index + 1);
    }
  };

  const decreaseIndex = () => {
    if (index > 0 || index > 2) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="skills-slider">
      {index !== 0
        ? <button onClick={() => { decreaseIndex(); }}><img src={arrowLeft} className="active-image" /></button>
        : <img src={arrowLeftGray} className="unactive-image" />}

      <div className="skills-slider_list">
        <SkillsList
          text={textArray[index]}
        />
      </div>

      {index < 2
        ? <button onClick={() => { increaseIndex(); }}><img src={arrowRight} className="active-image" /></button>
        : <img src={arrowRightGray} className="unactive-image" />}

    </div>
  );
}

const SkillsList = (props) => (
  <ul>{props.text}</ul>
);
