import { api } from '../instance';

import type { CurrentUserContract } from './types';

const getSessionInfo = api.createRoute<void, CurrentUserContract>(
  {
    url: '/users/current'
  },
  { withAuth: true }
);

export { getSessionInfo };
