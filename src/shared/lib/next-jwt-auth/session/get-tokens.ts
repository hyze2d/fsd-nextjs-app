import { CookieRequest, getRefreshTokenFromRequest } from '../cookies';
import { parse } from 'cookie';

type GetTokenResultSuccess = { isAuthenticated: true; token: string };
type GetTokenResultFail = { isAuthenticated: false };
type GetTokenResult = GetTokenResultSuccess | GetTokenResultFail;

function getServerToken(req: CookieRequest) {
  const token = getRefreshTokenFromRequest(req);

  return formatResult(token);
}

function getClientToken() {
  const parsedCookies = parse(document.cookie);

  const token = getRefreshTokenFromRequest({ cookies: parsedCookies });

  return formatResult(token);
}

function getToken(req?: CookieRequest) {
  return req ? getServerToken(req) : getClientToken();
}

function formatResult(token?: string): GetTokenResult {
  return !token ? { isAuthenticated: false } : { isAuthenticated: true, token };
}

export { getToken };
export type { GetTokenResultFail, GetTokenResultSuccess, GetTokenResult };
