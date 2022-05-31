import type { Scope } from 'effector';
import { allSettled } from 'effector';
import { serialize } from 'effector';
import { fork } from 'effector';
import { Provider } from 'effector-react/ssr';
import type { ReactElement } from 'react';
import type { AppContext, AppProps } from 'next/app';
import NextApp from 'next/app';

import { started } from '@processes/boot';
import { environment } from '@shared/config/environment';

type PageProps = Record<string, unknown> & {
  scope: Scope;
};

type Props = Omit<AppProps<PageProps>, 'pageProps' | 'Component'> & {
  scope: Scope;

  props: PageProps;

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

const App = ({ Component, props, scope }: Props) => (
  <Provider value={getScope(scope)}>
    <Component {...props} />
  </Provider>
);

App.getInitialProps = async (context: AppContext) => {
  const scope = fork();

  context.ctx.scope = scope;

  if (environment.isServer) {
    await allSettled(started, { scope });
  }

  const props = await NextApp.getInitialProps(context);

  return {
    props,
    scope: serialize(scope)
  };
};

export { App };
