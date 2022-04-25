import { webviewBackendApi } from '@shared/api';

import { loginHandler } from '@lib/next-jwt-auth/handlers';

export default loginHandler(webviewBackendApi.auth.loginFx);
