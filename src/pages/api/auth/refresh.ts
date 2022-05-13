import { wrapResponse } from '@lib/api-routes';

import { webviewBackendApi } from '@shared/api';

export default wrapResponse(webviewBackendApi.config.handlers.login);
