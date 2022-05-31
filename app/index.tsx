import type { Scope } from 'effector';
import { allSettled } from 'effector';
import { serialize } from 'effector';
import { fork } from 'effector';
import { Provider } from 'effector-react/ssr';
import { DefaultSeo as Seo } from 'next-seo';
import type { ReactElement } from 'react';
import type { AppContext, AppProps } from 'next/app';
import NextApp from 'next/app';

import { started } from '@processes/boot';
import { environment } from '@shared/config/environment';
import { DEFAULT_SEO } from '@shared/config/seo';

type Props = Omit<AppProps, 'Component'> & {
  scope: Scope;

  Component: (props: any) => ReactElement;
};

let _scope: Scope;

let getScope = (payload: Scope) => {
  let scope = fork({
    values: {
      ...payload,

      ...serialize(_scope ?? {})
    }
  });

  if (environment.isClient) {
    _scope = scope;
  }

  return scope;
};

const App = ({ Component, scope, pageProps: props }: Props) => (
  <Provider value={getScope(scope)}>
    <Seo {...DEFAULT_SEO} />

    <Component {...props} />
  </Provider>
);

App.getInitialProps = async (context: AppContext) => {
  const scope = fork();

  context.ctx.scope = scope;

  if (environment.isServer) {
    await allSettled(started, { scope });
  }

  return {
    ...(await NextApp.getInitialProps(context)),
    scope: serialize(scope)
  };
};

export { App };
