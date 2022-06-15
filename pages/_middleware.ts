import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import config from '../i18n.json';

const PUBLIC_FILE = /\.(.*)$/;

const middleware = (req: NextRequest) => {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(req.nextUrl.pathname) &&
    !req.nextUrl.pathname.includes('/api/') &&
    req.nextUrl.locale === 'default';

  if (shouldHandleLocale) {
    const url = req.nextUrl.clone();

    url.pathname = `/${config.defaultLocale}${req.nextUrl.pathname}`;

    return NextResponse.redirect(url);
  }

  return undefined;
};

export { middleware };
