'use client';
import React, { FC, PropsWithChildren } from 'react';

import { Loader } from '@react-three/drei';
import { Canvas as ThreeCanvas } from '@react-three/fiber';

import styles from './Canvas.module.css';

export const Canvas: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ThreeCanvas
        className={styles.r3f}
        camera={{
          fov: 70,
          near: 0.1,
          far: 2000,
          position: [-2, 0.5, 4],
        }}
      >
        {children}
      </ThreeCanvas>
      <Loader />
    </>
  );
};
