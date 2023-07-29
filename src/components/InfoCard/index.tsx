import { FC, PropsWithChildren } from 'react';

import styles from './InfoCard.module.css';

export const InfoCard: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default InfoCard;
