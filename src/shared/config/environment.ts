const environment = {
  isServer: typeof window == 'undefined',
  isClient: typeof window != 'undefined'
};

export { environment };
