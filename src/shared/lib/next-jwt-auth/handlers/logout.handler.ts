import type { Effect } from 'effector';

import type { NextApiRequest, NextApiResponse } from 'next';

import { clearTokens } from '../cookies';

function logoutHandler(effect: Effect<void, void>) {
  return async function handler(_: NextApiRequest, res: NextApiResponse) {
    await effect();

    clearTokens(res);

    return {};
  };
}

export { logoutHandler };
