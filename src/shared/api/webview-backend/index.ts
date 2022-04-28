import { api } from './instance';
import { auth, handlers } from './bind-auth';
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
