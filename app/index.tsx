import type { Scope } from 'effector';
import { allSettled } from 'effector';
import { DefaultSeo as Seo } from 'next-seo';
import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import NextApp from 'next/app';
import { started } from '@processes/boot';
import { environment } from '@shared/config/environment';
import { DEFAULT_SEO } from '@shared/config/seo';
import { getInitialPropsWithScope, withScope } from '@shared/effector';
import {
  getInitialPropsWithTranslations,
  withTranslations
} from '@shared/next-i18n';
import { Provider } from './provider';

type Props = Omit<AppProps, 'Component'> & {
  scope: Scope;

  Component: (props: any) => ReactElement;
};

const App = withTranslations<Props>(
  withScope(({ Component, pageProps }) => (
    <Provider>
      <Seo {...DEFAULT_SEO} />

      <Component {...pageProps} />
    </Provider>
  ))
);

App.getInitialProps = getInitialPropsWithTranslations(
  getInitialPropsWithScope(async context => {
    if (environment.isServer) {
      await allSettled(started, { scope: context.ctx.scope });
    }

    return NextApp.getInitialProps(context);
  })
);

export { App };
