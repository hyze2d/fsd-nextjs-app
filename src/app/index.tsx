import type { PropsWithChildren } from 'react';
import type { AppProps } from 'next/app';
import { baseLayout } from './layouts/base';

type Props = Omit<AppProps, 'Component'> & {
  Component: ((props: object) => JSX.Element) & {
    getLayout: (children: JSX.Element) => JSX.Element;
  };
};

const Theme = ({ children }: PropsWithChildren<{}>) => <>{children}</>;

const Provider = ({ children }: PropsWithChildren<{}>) => (
  <Theme>{children}</Theme>
);

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || baseLayout.getLayout;

  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
};

export { App };
