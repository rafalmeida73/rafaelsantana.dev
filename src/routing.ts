import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'pt'];

export const routing = defineRouting({
  locales,
  defaultLocale: 'pt',
  localePrefix: 'as-needed',
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
