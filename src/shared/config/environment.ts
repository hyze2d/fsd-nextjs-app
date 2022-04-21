import getConfig from 'next/config';

const { serverRuntimeConfig = {}, publicRuntimeConfig = {} } = getConfig();

const environment: {
  apiUrl: string;
  secret: string;
} = {
  ...serverRuntimeConfig,
  ...publicRuntimeConfig
};

export { environment };
