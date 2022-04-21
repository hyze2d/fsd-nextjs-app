import { NextApiResponse } from 'next';
import { serialize } from 'cookie';

function setCookies(
  res: NextApiResponse,
  options: { key: string; value: string }[]
) {
  res.setHeader(
    'Set-Cookie',
    options.map(({ key, value }) =>
      serialize(key, value, { path: '/', httpOnly: true })
    )
  );
}

function clearCookies(res: NextApiResponse, keys: string[]) {
  res.setHeader(
    'Set-Cookie',
    keys.map(key =>
      serialize(key, '', {
        expires: new Date(1),
        path: '/',
        httpOnly: true
      })
    )
  );
}

export { clearCookies, setCookies };
