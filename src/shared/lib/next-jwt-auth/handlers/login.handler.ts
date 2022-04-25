import { NextApiRequest, NextApiResponse } from 'next';
import { Effect } from 'effector';

import { setTokensToCookie } from '../cookies';
import { Tokens } from '../types';

function loginHandler<Body>(effect: Effect<Body, Tokens>) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { accessToken, refreshToken } = await effect(req.body);

    setTokensToCookie(res, refreshToken);

    res.status(201).json({ accessToken });
  };
}

export { loginHandler };
