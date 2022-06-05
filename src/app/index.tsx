import type { PropsWithChildren } from 'react';
import type { AppProps } from 'next/app';
import { Theme } from './theme';

type Props = Omit<AppProps, 'Component'> & {
  Component: ((props: object) => JSX.Element) & {
    getLayout: (children: JSX.Element) => JSX.Element;
  };
};

const Provider = ({ children }: PropsWithChildren<{}>) => (
  <Theme>{children}</Theme>
);

const _getLayout = (page: (props: Record<string, unknown>) => JSX.Element) =>
  page;

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || _getLayout;

  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
};

export { App };
