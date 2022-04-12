import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const MOCK_LOCALE_CODE = 'default';
const REDIRECT_DEFAULT_LOCALE_CODE = 'uk';

const stripDefaultLocale = (str: string): string => {
  const stripped = str.replace(`/${MOCK_LOCALE_CODE}`, '');

  return stripped;
};

const _middleware = (request: NextRequest) => {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale === MOCK_LOCALE_CODE;

  if (!shouldHandleLocale) return;

  return NextResponse.redirect(
    `/${REDIRECT_DEFAULT_LOCALE_CODE}${stripDefaultLocale(
      request.nextUrl.pathname
    )}${request.nextUrl.search}`
  );
};

export default _middleware;
