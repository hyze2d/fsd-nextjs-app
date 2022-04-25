import { REFRESH_TOKEN_KEY } from './constants';
import { CookieRequest } from './types';

function getRefreshTokenFromRequest(req: CookieRequest): string {
  return req.cookies[REFRESH_TOKEN_KEY];
}

export { getRefreshTokenFromRequest };
