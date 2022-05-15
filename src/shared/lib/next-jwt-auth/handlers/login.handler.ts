import type { Effect } from 'effector';

import type { NextApiRequest, NextApiResponse } from 'next';

import { setTokensToCookie } from '../cookies';

import type { Tokens } from '../types';

function loginHandler<Body>(
  effect: Effect<Body, Tokens>,
  check = (_: unknown): _ is Body => true
) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!check(req.body)) {
      throw new Error('401');
    }

    const { accessToken, refreshToken } = await effect(req.body);

    setTokensToCookie(res, refreshToken);

    return { accessToken };
  };
}

export { loginHandler };
