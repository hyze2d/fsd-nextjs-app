import { api } from './instance';

import { routes as authRoutes } from './auth';
import { routes as usersRoutes } from './users';

const webviewBackendApi = {
  auth: authRoutes,
  users: usersRoutes,

  config: api
};

export * from './users/types';
export * from './auth/types';
export { webviewBackendApi };
