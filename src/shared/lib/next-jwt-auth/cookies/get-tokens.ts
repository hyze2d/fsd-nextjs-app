import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants';
import { CookieRequest } from './types';

function getRefreshTokenFromRequest(req: CookieRequest): string {
  const refreshToken = req.cookies[REFRESH_TOKEN_KEY];

  return refreshToken;
}

function getAccessTokenFromRequest(req: CookieRequest): string {
  const accessToken = req.cookies[ACCESS_TOKEN_KEY];

  return accessToken;
}

export { getAccessTokenFromRequest, getRefreshTokenFromRequest };
