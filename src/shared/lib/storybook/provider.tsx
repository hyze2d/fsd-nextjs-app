import { fork as effectorFork } from 'effector';
import { Provider } from 'effector-react/scope';
import type { I18nProviderProps } from 'next-translate';
import I18nProvider from 'next-translate/I18nProvider';

import type { FC, PropsWithChildren } from 'react';

import albums from '../../../../locales/en/albums.json';
import common from '../../../../locales/en/common.json';
import home from '../../../../locales/en/home.json';

type StorybookProviderProps = PropsWithChildren<{
  fork?: Parameters<typeof effectorFork>[0];
  i18n?: I18nProviderProps;
}>;

const StorybookProvider: FC<StorybookProviderProps> = ({
  fork,
  i18n,
  children
}) => (
  <Provider value={effectorFork(fork)}>
    <I18nProvider {...i18n}>{children}</I18nProvider>
  </Provider>
);

StorybookProvider.defaultProps = {
  fork: {},
  i18n: {
    lang: 'en',
    namespaces: { common, albums, home },
    config: { defaultNS: 'common' }
  }
};

export { StorybookProvider };
