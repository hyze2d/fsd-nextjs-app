import type { Effect } from 'effector';

import type { NextApiRequest, NextApiResponse } from 'next';

import { setTokensToCookie } from '../cookies';

import type { Tokens } from '../types';

function loginHandler<Body>(effect: Effect<Body, Tokens>) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { accessToken, refreshToken } = await effect(req.body);

    setTokensToCookie(res, refreshToken);

    return { accessToken };
  };
}

export { loginHandler };
