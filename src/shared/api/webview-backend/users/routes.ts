import { api } from '../instance';

import { CurrentUserContract } from './types';

const getSessionInfo = api.createRoute<void, CurrentUserContract>(
  {
    url: '/users/current'
  },
  //TODO: Bind refresh token from api-route handler
  { withAuth: true }
);

export { getSessionInfo };
