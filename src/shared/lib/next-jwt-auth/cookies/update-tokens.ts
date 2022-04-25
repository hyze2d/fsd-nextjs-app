import { NextApiResponse } from 'next';

import { RefreshToken } from '../types';

import { REFRESH_TOKEN_KEY } from './constants';
import { clearCookies, setCookies } from './lib';

function setTokensToCookie(res: NextApiResponse, refreshToken: RefreshToken) {
  setCookies(res, [
    { name: REFRESH_TOKEN_KEY, value: refreshToken, httpOnly: true }
  ]);
}

function clearTokens(res: NextApiResponse) {
  clearCookies(res, [{ name: REFRESH_TOKEN_KEY, httpOnly: true }]);
}

export { setTokensToCookie, clearTokens };
