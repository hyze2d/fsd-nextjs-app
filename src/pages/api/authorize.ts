import Cookies from 'cookies';
import { NextApiHandler } from 'next';

const authorize: NextApiHandler = (req, res) => {
  const cookies = new Cookies(req, res);

  cookies.set('authorization', req.body.token);

  res.status(200).send({
    data: null,
    message: 'Authorized'
  });
};

export default authorize;
