import { NextApiRequest } from 'next';

type CookieRequest = Pick<NextApiRequest, 'cookies'>;

export type { CookieRequest };
