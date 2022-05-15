import type { CookieRequest } from './types';

function isRequestWithCookies(target: unknown): target is CookieRequest {
  return (
    !!target &&
    typeof target === 'object' &&
    Object.prototype.hasOwnProperty.call(target, 'cookies')
  );
}

export { isRequestWithCookies };
