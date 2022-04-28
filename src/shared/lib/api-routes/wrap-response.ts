import { NextApiRequest, NextApiResponse } from 'next';

function wrapResponse(
  callback: (req: NextApiRequest, res: NextApiResponse) => Promise<object>
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    const data = await callback(req, res);

    res.status(200).json(data);
    return;
  };
}

export { wrapResponse };
