import { environment } from '@config/environment';

import { createHttpApi } from '@lib/effector-api';

const api = createHttpApi({ baseURL: environment.apiUrl });

export { api };
