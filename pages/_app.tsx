import '@styles/global.scss';
import { Provider } from 'effector-react/scope';
import appWithI18n from 'next-translate/appWithI18n';
import { withEffector } from 'nextjs-effector';
import { App } from '@app';
import type { AppProps } from 'next/app';
import config from '../i18n';

export default appWithI18n(
  withEffector(App as (props: AppProps) => JSX.Element, {
    Provider
  }) as any,

  {
    ...config,

    skipInitialProps: true
  }
);
