'use client';

import Tippy from '@tippyjs/react';

import styles from './Tooltip.module.css';
import { TooltipProps } from './types';

export function Tooltip({ children, text, position = 'bottom' }: TooltipProps) {
  return (
    <Tippy content={text} placement={position} className={styles.tooltip}>
      {children}
    </Tippy>
  );
}
