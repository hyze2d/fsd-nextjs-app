import type { NextApiHandler } from 'next';

const healthCheck: NextApiHandler = (_, res) => {
  res.status(200).send('BIP BOP');
};

export default healthCheck;
