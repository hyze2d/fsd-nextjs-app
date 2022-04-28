import { api } from '../instance';

import { CurrentUserContract } from './types';

const getSessionInfo = api.createRoute<void, CurrentUserContract>(
  {
    url: '/users/current'
  },
  { withAuth: true }
);

export { getSessionInfo };
