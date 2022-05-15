import { allSettled, fork, serialize } from 'effector';

import type { GetServerSideProps, NextPage } from 'next';

import { routes } from '@config/routes';

import { SessionData } from '@entities/session';

import { webviewBackendApi } from '@shared/api';

const MePage: NextPage = () => <SessionData />;

const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const scope = fork();
    console.log('test');

    await webviewBackendApi.config.handlers.refresh(req, res);

    const response = await allSettled(webviewBackendApi.users.getSessionInfo, {
      scope
    });

    if (response.status === 'fail') {
      return {
        redirect: {
          destination: routes.signIn(),
          permanent: false
        }
      };
    }

    return {
      props: {
        initialState: serialize(scope)
      }
    };
  } catch (e) {
    return {
      redirect: {
        destination: routes.signIn(),
        permanent: false
      }
    };
  }
};

export { getServerSideProps };

export default MePage;
