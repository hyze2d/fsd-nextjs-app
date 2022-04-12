import type { NextApiHandler } from 'next';

const healthCheck: NextApiHandler = (req, res) => {
  res.status(200).send('BIP BOP');
};

export default healthCheck;
