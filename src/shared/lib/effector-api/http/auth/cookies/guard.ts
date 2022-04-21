import { NextApiRequest } from 'next';

function isRequestWithCookies(
  target: unknown
): target is Pick<NextApiRequest, 'cookies'> {
  return (
    !!target && typeof target === 'object' && target.hasOwnProperty('cookies')
  );
}

export { isRequestWithCookies };
