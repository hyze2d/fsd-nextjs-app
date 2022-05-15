import { auth, handlers } from './bind-auth';

import { api } from './instance';

import { routes as usersRoutes } from './users';

const webviewBackendApi = {
  users: usersRoutes,

  auth,

  config: {
    ...api,
    handlers
  }
};

export * from './users/types';
export * from './auth/types';
export { webviewBackendApi };
