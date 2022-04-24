import { NextApiResponse } from 'next';

import { Tokens } from '../types';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants';
import { clearCookies, setCookies } from './lib';

function setTokensToCookie(
  res: NextApiResponse,
  { accessToken, refreshToken }: Tokens
) {
  setCookies(res, [
    { name: ACCESS_TOKEN_KEY, value: accessToken },
    { name: REFRESH_TOKEN_KEY, value: refreshToken, httpOnly: true }
  ]);
}

function clearTokens(res: NextApiResponse) {
  clearCookies(res, [
    { name: ACCESS_TOKEN_KEY },
    { name: REFRESH_TOKEN_KEY, httpOnly: true }
  ]);
}

export { setTokensToCookie, clearTokens };
