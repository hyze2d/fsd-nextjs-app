import type { PropsWithChildren, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { AppCrashed } from '@widgets/app-crashed/ui';
import { theme } from '@shared/config';
import { ErrorBoundary } from '@shared/lib/boundry';
import { Theme } from '@shared/ui/theme';

type Props = Omit<AppProps, 'Component'> & {
  Component: ((props: object) => JSX.Element) & {
    getLayout: (children: JSX.Element) => JSX.Element;
  };
};

const Provider = ({ children }: PropsWithChildren<{}>) => (
  <Theme theme={theme.light}>{children}</Theme>
);

const _getLayout = (page: ReactNode) => <>{page}</>;

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || _getLayout;

  return (
    <Provider>
      <ErrorBoundary fallback={AppCrashed} meta={{ Component, pageProps }}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </Provider>
  );
};

export { App };
