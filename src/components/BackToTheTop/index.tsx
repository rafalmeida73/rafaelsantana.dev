'use client';

import { useEffect } from 'react';

import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab, Tooltip } from '@mui/material';

export const BackToTheTop = () => {
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
    <Tooltip title="Voltar ao topo" placement="left">
      <Fab
        id="backToTheTop"
        color="primary"
        variant="extended"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao topo"
      >
        <NavigationIcon />
      </Fab>
    </Tooltip>
  );
};
