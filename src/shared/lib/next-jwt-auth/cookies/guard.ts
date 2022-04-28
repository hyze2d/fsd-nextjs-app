import type { CookieRequest } from './types';

function isRequestWithCookies(target: unknown): target is CookieRequest {
  return (
    !!target && typeof target === 'object' && target.hasOwnProperty('cookies')
  );
}

export { isRequestWithCookies };
