import { PropsWithChildren } from 'react';

import styles from './InfoCard.module.css';

export const InfoCard = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default InfoCard;
