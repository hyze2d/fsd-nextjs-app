import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AuthByEmailForm } from '@features/auth-by-email';

const HomePage: NextPage = () => {
  const { t } = useTranslation('home');

  return <AuthByEmailForm />;
};

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
