import { defineRouting } from "next-intl/routing";

export const locales = ["en", "pt"];

export const routing = defineRouting({
  locales,
  defaultLocale: "pt",
  localePrefix: "always",
});
