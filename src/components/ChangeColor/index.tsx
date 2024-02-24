'use client';

import { useCallback, useState, useEffect } from 'react';

import { useColor } from '@/hooks/useColor';
import { useTranslations } from 'next-intl';

export const ChangeColor = () => {
  const [loading, setLoading] = useState(true);

  const { color, setColor } = useColor();

  const t = useTranslations('Home');

  const handleChangeColor = useCallback(
    (colorValue: string) => {
      try {
        setColor(colorValue);
        document.documentElement.style.setProperty('--primary', colorValue);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    [setColor],
  );

  useEffect(() => {
    try {
      const primaryColor = getComputedStyle(
        document.documentElement,
      ).getPropertyValue('--primary');

      setColor(primaryColor);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [setColor]);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={e => {
          handleChangeColor(e.target.value);
        }}
        aria-labelledby="color"
        aria-label={t('changeColor.title')}
      />
    </div>
  );
};
