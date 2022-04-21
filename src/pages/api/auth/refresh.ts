import { NextApiRequest, NextApiResponse } from 'next';

import { webviewBackendApi } from '@shared/api';

import {
  getRefreshTokenFromRequest,
  setTokensToCookie
} from '@lib/effector-api';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const refreshToken = getRefreshTokenFromRequest(req);

  const tokens = await webviewBackendApi.auth.refreshFx({ refreshToken });

  setTokensToCookie(res, tokens);

  res.status(201).json({ accessToken: tokens.accessToken });
}

export default handler;
