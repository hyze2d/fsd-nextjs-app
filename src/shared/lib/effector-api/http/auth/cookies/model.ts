import { NextApiRequest, NextApiResponse } from 'next';

import { Tokens } from '../types';

import { clearCookies, setCookies } from './lib';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

function setTokensToCookie(
  res: NextApiResponse,
  { accessToken, refreshToken }: Tokens
) {
  setCookies(res, [
    { key: ACCESS_TOKEN_KEY, value: accessToken },
    { key: REFRESH_TOKEN_KEY, value: refreshToken }
  ]);
}

function clearTokens(res: NextApiResponse) {
  clearCookies(res, [ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY]);
}

function getRefreshTokenFromRequest(req: NextApiRequest): string {
  const token = req.cookies[REFRESH_TOKEN_KEY];

  if (!token) throw new Error('Refresh token not found');

  return token;
}

function getAccessTokenFromRequest(
  req: Pick<NextApiRequest, 'cookies'>
): string {
  const token = req.cookies[ACCESS_TOKEN_KEY];

  if (!token) throw new Error('Access token not found');

  return token;
}

export {
  clearTokens,
  getAccessTokenFromRequest,
  getRefreshTokenFromRequest,
  setTokensToCookie
};
