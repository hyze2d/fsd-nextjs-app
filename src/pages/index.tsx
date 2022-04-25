import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useStore } from 'effector-react/scope';
import { allSettled, fork, serialize } from 'effector';

import { webviewBackendApi } from '@shared/api';
import { routes } from '@routes';

import { sessionModel } from '@entities/session';

const HomePage: NextPage = () => {
  const { t } = useTranslation('home');

  const viewer = useStore(sessionModel.$viewerData);
  const isAuthenticated = useStore(sessionModel.$isAuthenticated);

  return <div>HOME PAGE: {JSON.stringify(viewer, null, 4)}</div>;
};

const getServerSideProps: GetStaticProps = async context => {
  const scope = fork();

  const { status: refreshStatus } = await allSettled(
    webviewBackendApi.auth.refreshTokensFx,
    { scope }
  );

  const { status } = await allSettled(webviewBackendApi.users.getSessionInfo, {
    scope
  });

  console.log('getServerSideProps', status);

  if (status === 'fail' || refreshStatus === 'fail') {
    return {
      redirect: {
        destination: routes.signIn(),
        permanent: false
      }
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale as Locale, [
        'common',
        'home'
      ])),

      initialState: serialize(scope)
    }
  };
};

export { getServerSideProps };
export default HomePage;
