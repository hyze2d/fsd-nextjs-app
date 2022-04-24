import { NextApiRequest, NextApiResponse } from 'next';
import { Effect } from 'effector';

import { setTokensToCookie } from '../cookies';
import { Tokens } from '../types';

function loginHandlerFactory<Body>(effect: Effect<Body, Tokens>) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    const tokens = await effect(req.body);

    setTokensToCookie(res, tokens);

    res.status(201).json({ accessToken: tokens.accessToken });
  };
}

export { loginHandlerFactory };
