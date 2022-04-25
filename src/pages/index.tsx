import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useStore } from 'effector-react/scope';
import { sessionModel } from '@entities/session';
import { isServerSide } from '@lib/environment';
import { AuthByEmailForm } from '@features/auth-by-email';

const HomePage: NextPage = () => {
  const { t } = useTranslation('home');

  const viewer = useStore(sessionModel.$viewerData);
  const isAuthenticated = useStore(sessionModel.$isAuthenticated);

  return (
    <>
      <AuthByEmailForm />

      <div>isAuthenticated: {isAuthenticated}</div>
    </>
  );
};

const getServerSideProps: GetStaticProps = async context => {
  if (isServerSide()) {
    console.log('serverSide');
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale as Locale, [
        'common',
        'home'
      ]))
    }
  };
};

export { getServerSideProps };

export default HomePage;
