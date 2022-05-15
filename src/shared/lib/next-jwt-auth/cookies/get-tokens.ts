import { REFRESH_TOKEN_KEY } from './constants';

import type { CookieRequest } from './types';

function getRefreshTokenFromRequest(req: CookieRequest) {
  return req.cookies[REFRESH_TOKEN_KEY];
}

export { getRefreshTokenFromRequest };
