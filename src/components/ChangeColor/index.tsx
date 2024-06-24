'use client';

import { useCallback, useState, useEffect } from 'react';

import { useColor } from '@/hooks/useColor';
import { useTranslations } from 'next-intl';

import { svgIcon } from './svgIcon';

export const ChangeColor = () => {
  const [loading, setLoading] = useState(true);

  const { color, setColor } = useColor();

  const t = useTranslations('Home');

  // Function to update the favicon with the given SVG
  function changeFaviconWithIcon(svgData: string) {
    // Convert SVG to base64-encoded data URL
    const svgBase64 = btoa(svgData);
    const faviconURL = `data:image/svg+xml;base64,${svgBase64}`;

    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;

    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    // Update the favicon
    link.href = faviconURL;
  }

  const handleChangeColor = useCallback(
    (colorValue: string) => {
      try {
        setColor(colorValue);
        changeFaviconWithIcon(svgIcon(colorValue));
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
