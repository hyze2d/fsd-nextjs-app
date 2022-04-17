import { createHttpApi } from '@lib/effector-api';

const api = createHttpApi({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export { api };
