import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import config from '../i18n.js';

const PUBLIC_FILE = /\.(.*)$/;

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
