import type { Effect } from 'effector';

import type { Tokens } from '../types';
import { getRefreshTokenFromRequest, setTokensToCookie } from '../cookies';

import type { HandlerRequest, HandlerResponse } from './types';

function refreshHandler(effect: Effect<Pick<Tokens, 'refreshToken'>, Tokens>) {
  return async function handler(req: HandlerRequest, res: HandlerResponse) {
    const oldRefreshToken = getRefreshTokenFromRequest(req)!;

    const { refreshToken, accessToken } = await effect({
      refreshToken: oldRefreshToken
    });

    setTokensToCookie(res, refreshToken);

    return { accessToken };
  };
}

export { refreshHandler };
