import type { HandlerResponse } from '../handlers/types';
import type { RefreshToken } from '../types';

import { REFRESH_TOKEN_KEY } from './constants';
import { clearCookies, setCookies } from './lib';

function setTokensToCookie(res: HandlerResponse, refreshToken: RefreshToken) {
  setCookies(res, [
    { name: REFRESH_TOKEN_KEY, value: refreshToken, httpOnly: true }
  ]);
}

function clearTokens(res: HandlerResponse) {
  clearCookies(res, [{ name: REFRESH_TOKEN_KEY, httpOnly: true }]);
}

export { setTokensToCookie, clearTokens };
