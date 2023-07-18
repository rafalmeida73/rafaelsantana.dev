import { FC } from 'react';

import { handleAnalyticsEventTracker } from '@/utils/GA';

import styles from './Info.module.scss';
import { InfoProps } from './types';

export const Info: FC<InfoProps> = ({
  title,
  description,
  time,
  full = false,
}) => {
  return (
    <div
      className={
        full
          ? `${styles.container} col s12 m12 l12 info`
          : `${styles.container} col s12 m6 l6 info`
      }
    >
      {!title?.link ? (
        <p className={`${styles.title} title`}>{title?.text}</p>
      ) : (
        <a
          href={title?.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title?.ariaLabel}
          className={`${styles.title} title`}
          onClick={() => handleAnalyticsEventTracker(title?.text)}
        >
          {title?.text}
        </a>
      )}
      <p className={`${styles.date} date`}>{time}</p>
      {!description?.link ? (
        <p>{description?.text}</p>
      ) : (
        <a
          href={description?.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={description?.ariaLabel}
          onClick={() => handleAnalyticsEventTracker(description?.text)}
        >
          {description?.text}
        </a>
      )}
    </div>
  );
};
