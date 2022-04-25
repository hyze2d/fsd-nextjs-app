import { webviewBackendApi } from '@shared/api';

import { refreshHandler } from '@lib/next-jwt-auth/handlers';

export default refreshHandler(webviewBackendApi.auth.refreshFx);
