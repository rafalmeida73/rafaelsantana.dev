import { FC } from 'react';

import GALink from '../GALink';
import styles from './Info.module.css';
import { InfoProps } from './types';

export const Info: FC<InfoProps> = ({ title, description, time }) => {
  return (
    <div className={styles.container}>
      {!title?.link ? (
        <p className={styles.title}>{title?.text}</p>
      ) : (
        <GALink
          href={title?.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title?.ariaLabel}
          className={styles.title}
          gaText={title?.text}
        >
          {title?.text}
        </GALink>
      )}
      <p className={styles.date}>{time}</p>
      {!description?.link ? (
        <p className={styles.description}>{description?.text}</p>
      ) : (
        <GALink
          href={description?.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={description?.ariaLabel}
          className={styles.description}
          gaText={description?.text}
        >
          {description?.text}
        </GALink>
      )}
    </div>
  );
};
