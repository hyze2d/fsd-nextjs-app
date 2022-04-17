import type { AppContext, AppProps } from 'next/app';
import NextApp from 'next/app';
import type { Scope } from 'effector';
import { allSettled, fork, serialize } from 'effector';
import { appWithTranslation } from 'next-i18next';

import { authByEmailModel } from '@features/auth-by-email';

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
      <Component {...pageProps} />
    </Provider>
  );
};

CustomApp.getInitialProps = async (context: AppContext) => {
  let appScope: Scope | undefined;

  if (typeof window === 'undefined') {
    // const cookies = new Cookies(context.ctx.req!, context.ctx.res!);

    // appScope = fork({
    // values: [[$token, cookies.get(AUTH_TOKEN_COOKIE_KEY)]],
    // });

    appScope = fork({
      values: [
        [authByEmailModel.$email, 'admin@gmail.com'],
        [authByEmailModel.$password, 'admin123']
      ]
    });

    // await allSettled(getUser, { scope: appScope });
    await allSettled(authByEmailModel.formSubmitted, { scope: appScope });
  }

  const initialAppProps = await NextApp.getInitialProps(context);

  return {
    initialAppState: appScope ? serialize(appScope) : {},

    ...initialAppProps
  };
};

export default appWithTranslation(CustomApp);
