import getConfig from 'next/config';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { serverRuntimeConfig = {}, publicRuntimeConfig = {} } = getConfig();

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const envs = {
  ...serverRuntimeConfig,
  ...publicRuntimeConfig,

  isServer: typeof window == 'undefined',
  isClient: typeof window != 'undefined'
};

const environment = envs as {
  apiUrl: string;
  secret: string;

  isClient: boolean;
  isServer: boolean;
};

export { environment };
