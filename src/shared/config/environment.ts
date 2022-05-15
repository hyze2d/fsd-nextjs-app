import getConfig from 'next/config';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { serverRuntimeConfig = {}, publicRuntimeConfig = {} } = getConfig();

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const envs = {
  ...serverRuntimeConfig,
  ...publicRuntimeConfig
};

const environment = envs as {
  apiUrl: string;
  secret: string;
};

export { environment };
