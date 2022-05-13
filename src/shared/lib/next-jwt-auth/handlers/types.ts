import type { NextApiRequest, NextApiResponse } from 'next';
import type { IncomingMessage, ServerResponse } from 'http';
import type { NextApiRequestCookies } from 'next/dist/server/api-utils';

type HandlerRequest =
  | NextApiRequest
  | (IncomingMessage & { cookies: NextApiRequestCookies });

type HandlerResponse = NextApiResponse | ServerResponse;

export type { HandlerRequest, HandlerResponse };
