import type { PropsWithChildren, ReactNode } from 'react';
import type { AppProps } from 'next/app';

type Props = Omit<AppProps, 'Component'> & {
  Component: ((props: object) => JSX.Element) & {
    getLayout: (children: JSX.Element) => JSX.Element;
  };
};

const Theme = ({ children }: PropsWithChildren<{}>) => <>{children}</>;

const Provider = ({ children }: PropsWithChildren<{}>) => (
  <Theme>{children}</Theme>
);

const _getLayout = (page: ReactNode) => <>{page}</>;

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || _getLayout;

  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
};

export { App };
