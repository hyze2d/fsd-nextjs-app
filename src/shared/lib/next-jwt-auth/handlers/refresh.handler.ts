import { Effect } from 'effector';
import { NextApiRequest, NextApiResponse } from 'next';

import { Tokens } from '../types';
import { getRefreshTokenFromRequest, setTokensToCookie } from '../cookies';

function refreshHandlerFactory(
  effect: Effect<Pick<Tokens, 'refreshToken'>, Tokens>
) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    const refreshToken = getRefreshTokenFromRequest(req);

    const tokens = await effect({ refreshToken });

    setTokensToCookie(res, tokens);

    res.status(201).json({ accessToken: tokens.accessToken });
  };
}

export { refreshHandlerFactory };
