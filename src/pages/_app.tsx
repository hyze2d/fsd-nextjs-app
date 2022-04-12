import { $token, AUTH_TOKEN_COOKIE_KEY, getUser } from '@entities/session';
import { Auth } from '@features/auth';
import Cookies from 'cookies';
import NextApp, { AppContext, AppProps } from 'next/app';
import { FC } from 'react';
import { App } from 'src/app/app.component';
import 'src/app/app.scss';
import { Provider } from 'effector-react/scope';
import { allSettled, fork, Scope, serialize } from 'effector';
import { appWithTranslation } from 'next-i18next';

let clientScope: Scope;

const _App: FC<AppProps & { initialAppState: any }> & {
  getInitialProps: (context: AppContext) => object;
} = ({ Component, pageProps, initialAppState }) => {
  const scope = fork({
    values: {
      ...(initialAppState || {}),
      ...(clientScope && serialize(clientScope)),
      ...(pageProps?.initialState || {})
    }
  });

  if (typeof window !== 'undefined') {
    clientScope = scope;
  }

  return (
    <Provider value={scope}>
      <App>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </App>
    </Provider>
  );
};

_App.getInitialProps = async (context: AppContext) => {
  let _appScope: Scope;

  if (typeof window === 'undefined') {
    const cookies = new Cookies(context.ctx.req, context.ctx.res);

    _appScope = fork({
      values: [[$token, cookies.get(AUTH_TOKEN_COOKIE_KEY)]]
    });

    await allSettled(getUser, { scope: _appScope });
  }

  return {
    initialAppState: _appScope && serialize(_appScope),
    ...(await NextApp.getInitialProps(context))
  };
};

export default appWithTranslation(_App);
