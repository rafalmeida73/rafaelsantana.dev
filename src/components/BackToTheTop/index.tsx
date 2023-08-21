/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { useEffect } from 'react';

import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const BackToTheTop = () => {
  const t = useTranslations('Home');

  useEffect(() => {
    const handleScroll = () => {
      const mybutton = document?.getElementById?.('backToTheTop');

      if (
        document.body.scrollTop > 25 ||
        document.documentElement.scrollTop > 25
      ) {
        // eslint-disable-next-line no-unused-expressions
        mybutton ? (mybutton.style.display = 'block') : null;
      } else {
        // eslint-disable-next-line no-unused-expressions
        mybutton ? (mybutton.style.display = 'none') : null;
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Fab
        id="backToTheTop"
        variant="extended"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t('backToTheTop')}
        style={{
          backgroundColor: 'var(--primary)',
        }}
      >
        <NavigationIcon />
      </Fab>

      <noscript>
        <Link href="#" role="button" aria-label="Scroll to top">
          <Fab
            id="backToTheTopNoJS"
            variant="extended"
            aria-label={t('backToTheTop')}
            style={{
              backgroundColor: 'var(--primary)',
            }}
          >
            <NavigationIcon />
          </Fab>
        </Link>
      </noscript>
    </>
  );
};
