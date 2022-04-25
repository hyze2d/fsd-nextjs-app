import { NextApiRequest, NextApiResponse } from 'next';

import { clearTokens } from '../cookies';

function logoutHandler() {
  return async function handler(_: NextApiRequest, res: NextApiResponse) {
    clearTokens(res);

    res.status(200).json({});
  };
}

export { logoutHandler };
