"use client";

import { useCallback, useEffect, useState } from "react";

import { useColor } from "@/hooks/useColor";

import { useTranslations } from "next-intl";

export const ChangeColor = () => {
  const [loading, setLoading] = useState(true);

  const { color, setColor } = useColor();

  const t = useTranslations("Home");

  // Function to update the favicon with the given SVG
  const changeFaviconWithIcon = useCallback(async (color: string) => {
    const response = await fetch(`/api/icon/${color.replace("#", "")}`);
    const { data: icon } = await response.json();

    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }

    link.href = icon;
  }, []);

  const handleChangeColor = useCallback(
    (colorValue: string) => {
      try {
        setColor(colorValue);
        changeFaviconWithIcon(colorValue);
        document.documentElement.style.setProperty(
          "--color-primary",
          colorValue,
        );
      } catch (error) {
        console.error(error);
      }
    },
    [changeFaviconWithIcon, setColor],
  );

  useEffect(() => {
    try {
      const primaryColor = getComputedStyle(
        document.documentElement,
      ).getPropertyValue("--color-primary");

      setColor(primaryColor);
    } catch (error) {
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
    <div className="mt-2">
      <input
        type="color"
        value={color}
        onChange={(e) => {
          handleChangeColor(e.target.value);
        }}
        aria-labelledby="color"
        aria-label={t("changeColor.title")}
        className="color-input-wrapper color-input-swatch h-8 w-8 cursor-pointer border-none"
      />
    </div>
  );
};
