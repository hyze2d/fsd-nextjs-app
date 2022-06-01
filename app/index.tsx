import type { Scope } from 'effector';
import { allSettled } from 'effector';
import { serialize } from 'effector';
import { fork } from 'effector';
import { DefaultSeo as Seo } from 'next-seo';
import { useMemo } from 'react';
import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import NextApp from 'next/app';
import { started } from '@processes/boot';
import { environment } from '@shared/config/environment';
import { DEFAULT_SEO } from '@shared/config/seo';
import {
  getInitialPropsWithTranslations,
  withTranslations
} from '@shared/next-i18n';
import { Provider } from './provider';

type Props = Omit<AppProps, 'Component'> & {
  scope: Scope;

  Component: (props: any) => ReactElement;
};

let _clientScope: Scope;

let useScope = (payload: Scope) =>
  useMemo(() => {
    let scope = fork({
      values: {
        ...(_clientScope ? serialize(_clientScope) : {}),

        ...payload
      }
    });

    if (environment.isClient) {
      _clientScope = scope;
    }

    return scope;
  }, []);

const App = withTranslations<Props>(
  ({ Component, scope, pageProps: props }) => (
    <Provider scope={useScope(scope)}>
      <Seo {...DEFAULT_SEO} />

      <Component {...props} />
    </Provider>
  )
);

App.getInitialProps = getInitialPropsWithTranslations(async context => {
  let scope = environment.isClient ? _clientScope : fork();

  context.ctx.scope = scope;

  if (environment.isServer) {
    await allSettled(started, { scope });
  }

  const props = await NextApp.getInitialProps(context);

  return {
    ...props,
    scope: environment.isClient ? {} : serialize(scope)
  };
});

export { App };
