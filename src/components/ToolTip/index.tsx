'use client';

import styles from './Tooltip.module.css';
import { TooltipProps } from './types';

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <div className={styles.container}>
      {children}
      <span className={styles.tooltip}>{text}</span>
    </div>
  );
}
