import { createHttpApi } from '@lib/effector-api';

import { environment } from '@config/environment';

const api = createHttpApi({ baseURL: environment.apiUrl });

export { api };
