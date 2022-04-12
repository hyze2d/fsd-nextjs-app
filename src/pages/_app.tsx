import NextApp, { AppContext, AppProps } from 'next/app';
import { allSettled, fork, Scope, serialize } from 'effector';
import { appWithTranslation } from 'next-i18next';
import Cookies from 'cookies';

import { $token, AUTH_TOKEN_COOKIE_KEY, getUser } from '@entities/session';

import { Auth } from '@features/auth';

import { Provider } from '@app/provider.component';
import '@app/app.scss';

let clientScope: Scope;

type CustomAppProps = AppProps & {
  /**
   * For initial effector scope
   */
  initialAppState: Record<string, any>;
};

const CustomApp = ({
  Component,
  pageProps,
  initialAppState
}: CustomAppProps) => {
  const scope = fork({
    values: {
      ...initialAppState,

      ...(clientScope ? serialize(clientScope) : {}),

      //FIXME: Add types or comments to annotate 'initialState' key
      ...(pageProps?.initialState || {})
    }
  });

  if (typeof window !== 'undefined') {
    clientScope = scope;
  }

  return (
    <Provider scope={scope}>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </Provider>
  );
};

CustomApp.getInitialProps = async (context: AppContext) => {
  let appScope: Scope;

  if (typeof window === 'undefined') {
    const cookies = new Cookies(context.ctx.req, context.ctx.res);

    appScope = fork({
      values: [[$token, cookies.get(AUTH_TOKEN_COOKIE_KEY)]]
    });

    await allSettled(getUser, { scope: appScope });
  }

  const initialAppProps = await NextApp.getInitialProps(context);

  return {
    initialAppState: appScope ? serialize(appScope) : {},

    ...initialAppProps
  };
};

export default appWithTranslation(CustomApp);
