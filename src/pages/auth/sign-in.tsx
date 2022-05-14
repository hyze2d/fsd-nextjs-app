import type { GetStaticProps, NextPage } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AuthByEmailForm } from '@features/auth-by-email';

import type { Locale } from '@shared/config/i18n';

const HomePage: NextPage = () => <AuthByEmailForm />;

const getStaticProps: GetStaticProps = async context => ({
  props: {
    ...(await serverSideTranslations(context.locale as Locale, [
      'common',
      'home'
    ]))
  }
});

export { getStaticProps };

export default HomePage;
