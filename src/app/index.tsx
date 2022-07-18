import { useEvent } from 'effector-react/scope';
import type { PropsWithChildren, ReactNode } from 'react';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { $$boot } from '@processes/boot';
import { AppCrashed } from '@widgets/app-crashed';
import { ErrorBoundary } from '@shared/lib/boundry';

type Props = Omit<AppProps, 'Component'> & {
  Component: ((props: object) => JSX.Element) & {
    getLayout: (children: JSX.Element) => JSX.Element;
  };
};

const Provider = ({ children }: PropsWithChildren<{}>) => <>{children}</>;

const _getLayout = (page: ReactNode) => <>{page}</>;

const App = ({ Component, pageProps }: Props) => {
  const mounted = useEvent($$boot.mounted);
  const getLayout = Component.getLayout || _getLayout;

  useEffect(() => {
    mounted();
  }, []);

  return (
    <Provider>
      <ErrorBoundary fallback={AppCrashed} meta={{ Component, pageProps }}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </Provider>
  );
};

export { App };
