import { api } from './instance';
import { auth } from './bind-auth';

import { routes as usersRoutes } from './users';

const webviewBackendApi = {
  users: usersRoutes,

  auth,

  config: api
};

export * from './users/types';
export * from './auth/types';
export { webviewBackendApi };
