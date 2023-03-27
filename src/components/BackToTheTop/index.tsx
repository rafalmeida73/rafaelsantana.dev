/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';

import { useTranslations } from 'next-intl';

export const BackToTheTop = () => {
  const t = useTranslations('Home');

  useEffect(() => {
    const handleScroll = () => {
      const mybutton = document?.getElementById?.('backToTheTop');
      if (
        document.body.scrollTop > 25 ||
        document.documentElement.scrollTop > 25
      ) {
        mybutton ? (mybutton.style.display = 'block') : null;
        mybutton ? (mybutton.style.visibility = 'visible') : null;
      } else {
        mybutton ? (mybutton.style.display = 'none') : null;
      }
    };

    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div className="fixed-action-btn">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        id="backToTheTop"
        className="btn tooltipped"
        data-position="left"
        data-tooltip={t('backToTheTop')}
      >
        <i className="material-icons topIcon">arrow_upward</i>
      </button>
    </div>
  );
};
