import { NextApiResponse } from 'next';
import { serialize } from 'cookie';

function setCookies(
  res: NextApiResponse,
  options: { name: string; value: string; httpOnly?: boolean }[]
) {
  res.setHeader(
    'Set-Cookie',
    options.map(({ name, value, httpOnly }) =>
      serialize(name, value, { path: '/', httpOnly })
    )
  );
}

function clearCookies(
  res: NextApiResponse,
  keys: { name: string; httpOnly?: boolean }[]
) {
  res.setHeader(
    'Set-Cookie',
    keys.map(({ name, httpOnly }) =>
      serialize(name, '', {
        expires: new Date(1),
        path: '/',
        httpOnly
      })
    )
  );
}

export { clearCookies, setCookies };
