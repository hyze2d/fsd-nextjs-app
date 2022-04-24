import { NextApiRequest, NextApiResponse } from 'next';

import { clearTokens } from '../cookies';

function logoutHandlerFactory() {
  return async function handler(_: NextApiRequest, res: NextApiResponse) {
    clearTokens(res);

    res.status(200).json({});
  };
}

export { logoutHandlerFactory };
