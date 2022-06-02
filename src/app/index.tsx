import { DefaultSeo as Seo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Layout } from '@widgets/layout';
import { DEFAULT_SEO } from '@shared/config/seo';
import { Provider } from './provider';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Seo {...DEFAULT_SEO} />

    <Layout>
      {/* @ts-expect-error JSX typings */}

      <Component {...pageProps} />
    </Layout>
  </Provider>
);

export { App };
