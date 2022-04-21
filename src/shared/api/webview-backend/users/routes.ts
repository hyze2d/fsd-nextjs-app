import { api } from '../instance';

import { CurrentUserContract } from './types';

const getSessionInfo = api.createRoute<{ token?: string }, CurrentUserContract>(
  ({ token }) => ({
    url: '/users/current',
    headers: {
      ...(token
        ? {
            Authorization: `Bearer ${token}`
          }
        : {})
    }
  })
);

export { getSessionInfo };
