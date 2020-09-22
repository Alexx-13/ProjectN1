import React from 'react';

import '../styles/SideLinks.scss';
import vk from '../assets/images/social/vk-soc.svg';
import telegram from '../assets/images/social/telegram-soc.svg';
import github from '../assets/images/social/github-soc.svg';

export default function SideLinks() {
  const vkLink = 'https://vk.com/kernoga';
  const tgLink = 'https://t.me/alexx__1__3';
  const ghLink = 'https://github.com/Alexx-13';

  return (
    <div className="side-links activated">
      <a href={vkLink} target="_blank"><img src={vk} /></a>
      <a href={tgLink} target="_blank"><img src={telegram} /></a>
      <a href={ghLink} target="_blank"><img src={github} /></a>
    </div>
  );
}
