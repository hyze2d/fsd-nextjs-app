import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useStore } from 'effector-react/scope';

import { Button } from '@ui/button';
import { sessionModel } from '@entities/session';

const HomePage: NextPage = () => {
  const { t } = useTranslation('home');

  const viewer = useStore(sessionModel.$viewerData);
  const isAuthenticated = useStore(sessionModel.$isAuthenticated);

  const onClick = () => {
    axios
      .post('/api/auth/login', {
        email: 'admin@gmail.com',
        password: 'admin123'
      })
      .then(data => data.data)
      .then(console.log)
      .catch(console.log);
  };

  const refresh = () => {
    axios
      .post('/api/auth/refresh')
      .then(data => data.data)
      .then(console.log)
      .catch(console.log);
  };

  const logout = () => {
    axios.post('/api/auth/logout').then(console.log).catch(console.log);
  };

  return (
    <>
      <div>
        <Button onClick={onClick}>{t('login')}</Button>
      </div>

      <div>
        <br />

        <Button onClick={refresh}>{t('refresh')}</Button>
      </div>

      <div>
        <br />
        <Button onClick={logout}>{t('logout')}</Button>
      </div>

      <div>{JSON.stringify(viewer, null, 4)}</div>
    </>
  );
};

const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as Locale, ['common', 'home']))
  }
});

export { getStaticProps };

export default HomePage;
