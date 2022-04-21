import { NextApiRequest, NextApiResponse } from 'next';
import { clearTokens } from '@lib/effector-api';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  clearTokens(res);

  res.status(200).json({});
}

export default handler;
