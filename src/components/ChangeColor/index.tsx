'use client';

import React, { useCallback, useState, useEffect } from 'react';

import { handleAnalyticsEventTracker } from '@/utils/GA';

export const ChangeColor = () => {
  const [color, setColor] = useState('#3bbbe8');
  const [loading, setLoading] = useState(true);

  const handleChangeColor = useCallback((colorValue: string) => {
    setColor(colorValue);
    document.documentElement.style.setProperty('--primary', colorValue);
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
        aria-label="Alterar cor principal do site"
      />
    </div>
  );
};
