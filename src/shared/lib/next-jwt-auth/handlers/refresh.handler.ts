import { Effect } from 'effector';
import { NextApiRequest, NextApiResponse } from 'next';

import { Tokens } from '../types';
import { getRefreshTokenFromRequest, setTokensToCookie } from '../cookies';

function refreshHandler(effect: Effect<Pick<Tokens, 'refreshToken'>, Tokens>) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    const oldRefreshToken = getRefreshTokenFromRequest(req);

    const { refreshToken, accessToken } = await effect({
      refreshToken: oldRefreshToken
    });

    setTokensToCookie(res, refreshToken);

    res.status(201).json({ accessToken });
  };
}

export { refreshHandler };
