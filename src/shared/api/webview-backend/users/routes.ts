import { api } from '../instance';

import type { CurrentUserContract } from './types';

const getSessionInfoFx = api.createRoute<void, CurrentUserContract>(
  {
    url: '/users/current'
  },
  { withAuth: true }
);

export { getSessionInfoFx };
