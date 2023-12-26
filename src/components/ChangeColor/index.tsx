'use client';

import { useCallback, useState, useEffect } from 'react';

import { handleAnalyticsEventTracker } from '@/utils/GA';
import { useTranslations } from 'next-intl';

export const ChangeColor = () => {
  const [color, setColor] = useState('var(--primary)');
  const [loading, setLoading] = useState(true);

  const t = useTranslations('Home');

  const handleChangeColor = useCallback((colorValue: string) => {
    try {
      setColor(colorValue);
      document.documentElement.style.setProperty('--primary', colorValue);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, []);

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
  }, []);

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
          handleAnalyticsEventTracker(e.target.value);
        }}
        aria-labelledby="color"
        aria-label={t('changeColor.title')}
      />
    </div>
  );
};
