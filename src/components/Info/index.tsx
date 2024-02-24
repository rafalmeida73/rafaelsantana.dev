import { FC } from 'react';

import Links from '../Links';
import styles from './Info.module.css';
import { InfoProps } from './types';

export const Info: FC<InfoProps> = ({ title, description, time }) => {
  return (
    <div className={styles.container}>
      {!title?.link ? (
        <p className={styles.title}>{title?.text}</p>
      ) : (
        <Links
          href={title?.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title?.ariaLabel}
          className={styles.title}
        >
          {title?.text}
        </Links>
      )}
      <p className={styles.date}>{time}</p>
      {!description?.link ? (
        <p className={styles.description}>{description?.text}</p>
      ) : (
        <Links
          href={description?.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={description?.ariaLabel}
          className={styles.description}
        >
          {description?.text}
        </Links>
      )}
    </div>
  );
};
