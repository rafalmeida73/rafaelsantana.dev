/* eslint-disable react/no-unknown-property */
'use client';

import { Suspense } from 'react';

import { useColor } from '@/hooks/useColor';
import {
  Center,
  Cylinder,
  Float,
  Image,
  Outlines,
  PresentationControls,
  Text3D,
  useTexture,
} from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export const ImageProfile = () => {
  const matcapTexture = useTexture(
    '/img/matcap/BEE2E9_7E6A53_9AA09C_87837E.png',
  );

  const { viewport } = useThree();

  const { color } = useColor();

  return (
    <Suspense fallback={null}>
      <mesh scale={(viewport.width / 5) * 1}>
        <Center>
          <PresentationControls
            rotation={[0, 0, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          >
            <Float rotationIntensity={0.4}>
              <Cylinder
                position={[0, 0, -0.1]}
                scale={[1.8, 0.1, 1.8]}
                rotation={[1.6, 0, 0]}
              >
                <meshMatcapMaterial color={color} matcap={matcapTexture} />
              </Cylinder>
              <Image
                url="/img/profileImage.webp"
                transparent
                scale={3.6}
                radius={1.84}
              />
              <Text3D
                position={[-1.685, 1.7, 0.04]}
                scale={[-0.2, 0.2, 0.3]}
                font={'/fonts/inter.json'}
                bevelEnabled
                bevelSize={0.08}
                bevelThickness={0.03}
                height={1}
                lineHeight={0.9}
                letterSpacing={0.3}
                rotation={[0, 3, 0]}
                size={2.2}
              >
                R{'\n'}A{'\n'}F{'\n'}A{'\n'}E{'\n'}L
                <meshMatcapMaterial color={color} matcap={matcapTexture} />
                <Outlines thickness={0.02} color="#141414" />
              </Text3D>
            </Float>
          </PresentationControls>
        </Center>
      </mesh>
    </Suspense>
  );
};
