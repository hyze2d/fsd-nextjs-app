import { DefaultSeo as Seo } from 'next-seo';
import type { AppProps } from 'next/app';
import { DEFAULT_SEO } from '@shared/config/seo';
import { Provider } from './provider';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Seo {...DEFAULT_SEO} />

    {/* @ts-expect-error JSX typings */}

    <Component {...pageProps} />
  </Provider>
);

export { App };
