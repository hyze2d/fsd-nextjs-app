import { NextApiRequest, NextApiResponse } from 'next';

import { webviewBackendApi } from '@shared/api';
import { setTokensToCookie } from '@lib/effector-api';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tokens = await webviewBackendApi.auth.loginFx(req.body);

  setTokensToCookie(res, tokens);

  res.status(201).json({ accessToken: tokens.accessToken });
}

export default handler;
