import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import config from '../i18n.json';

const PUBLIC_FILE = /\.(.*)$/;
// const locales = new Map(config.locales.map(key => [key, key]));

const middleware = (req: NextRequest) => {
  const { locale, pathname } = req.nextUrl;

  const shouldHandleLocale =
    !PUBLIC_FILE.test(pathname) &&
    !pathname.includes('/api/') &&
    locale === 'default';

  if (shouldHandleLocale) {
    const url = req.nextUrl.clone();

    url.pathname = `/${config.locales[0]}${pathname}`;

    return NextResponse.redirect(url);
  }

  return undefined;
};

export { middleware };
