import '@app/app.scss';

import Cookies from 'cookies';

import type { Scope } from 'effector';

import { allSettled, fork, serialize } from 'effector';

import { appWithTranslation } from 'next-i18next';

import type { ComponentType, ReactNode } from 'react';

import { Provider } from '@app/provider.component';

import type { AppContext, AppProps } from 'next/app';

import NextApp from 'next/app';

import { Auth } from '@features/auth';

import { $token, AUTH_TOKEN_COOKIE_KEY, getUser } from '@entities/session';

let clientScope: Scope | undefined;

type CustomAppProps = Omit<AppProps, 'pageProps'> & {
  /**
   * For initial effector scope
   */
  initialAppState: Record<string, unknown>;

  pageProps: Record<string, unknown> & {
    initialState?: Record<string, unknown>;

    children: ReactNode;
  };
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
      ...(pageProps.initialState ?? {})
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
  let appScope: Scope | undefined;
  let { req, res } = context.ctx;

  if (typeof window === 'undefined' && req && res) {
    const cookies = new Cookies(req, res);

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

export default appWithTranslation(
  // TODO: FIX
  CustomApp as unknown as ComponentType<AppProps>
);
