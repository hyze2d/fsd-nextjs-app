import type { Effect } from 'effector';

import { getRefreshTokenFromRequest, setTokensToCookie } from '../cookies';

import type { Tokens } from '../types';

import type { HandlerRequest, HandlerResponse } from './types';

function refreshHandler(effect: Effect<Pick<Tokens, 'refreshToken'>, Tokens>) {
  return async function handler(req: HandlerRequest, res: HandlerResponse) {
    const oldRefreshToken = getRefreshTokenFromRequest(req);

    const { refreshToken, accessToken } = await effect({
      refreshToken: oldRefreshToken as string
    });

    setTokensToCookie(res, refreshToken);

    return { accessToken };
  };
}

export { refreshHandler };
