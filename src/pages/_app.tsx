import NextApp, { AppContext, AppProps } from 'next/app';
import { fork, Scope, serialize } from 'effector';
import { appWithTranslation } from 'next-i18next';

import { isRequestWithCookies } from '@lib/next-jwt-auth';

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

  if (isRequestWithCookies(context.ctx.req)) {
    try {
      // appScope = fork();
      //
      // await allSettled(webviewBackendApi.users.getSessionInfo, {
      //   scope: appScope
      // });
    } catch (e) {}
  }

  const initialAppProps = await NextApp.getInitialProps(context);

  return {
    initialAppState: appScope ? serialize(appScope) : {},

    ...initialAppProps
  };
};

export default appWithTranslation(CustomApp);
