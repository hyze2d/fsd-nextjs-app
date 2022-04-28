import type { NextApiRequest, NextApiResponse } from 'next';
import type { Effect } from 'effector';

import { clearTokens } from '../cookies';

function logoutHandler(effect: Effect<void, void, any>) {
  return async function handler(_: NextApiRequest, res: NextApiResponse) {
    await effect();

    clearTokens(res);

    return {};
  };
}

export { logoutHandler };
