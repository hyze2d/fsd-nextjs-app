import Cookies from 'cookies';

import type { NextApiHandler } from 'next';

const authorize: NextApiHandler = (req, res) => {
  const cookies = new Cookies(req, res);

  cookies.set('authorization', (req.body as { token: string }).token);

  res.status(200).send({
    data: null,
    message: 'Authorized'
  });
};

export default authorize;
