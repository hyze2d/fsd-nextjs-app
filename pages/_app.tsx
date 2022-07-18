import '@app/styles/global.scss';

import { Provider } from 'effector-react/scope';
import appWithI18n from 'next-translate/appWithI18n';
import { withEffector } from 'nextjs-effector';

import { App } from '@app';

import type { AppProps } from 'next/app';

import config from '../i18n';

const EffectorApp = withEffector(App as (props: AppProps) => JSX.Element, {
  Provider
});

const TranslatedApp = appWithI18n(EffectorApp as any, {
  ...config,
  skipInitialProps: true
});

export default TranslatedApp;
