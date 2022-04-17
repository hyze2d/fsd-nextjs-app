import { useEvent, useStore } from 'effector-react/scope';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { push } from '@shared/router';
import { routes } from '@routes';

import { Button } from '@ui/button';

import { LogoutButton, SessionData, sessionModel } from '@entities/session';

import { LoginForm } from '@features/auth-by-email';

const onLinkClick = push.prepend(() => routes.signIn());

const HomePage: NextPage = () => {
  const { t } = useTranslation('home');

  const isAuthenticated = useStore(sessionModel.$isAuthenticated);
  const linkClocked = useEvent(onLinkClick);

  return (
    <>
      <div>
        <Button onClick={linkClocked}> {t('link')}</Button>
      </div>

      <hr />
      <br />
      {!isAuthenticated ? <LoginForm /> : <LogoutButton />}
      <br />
      <hr />

      <div>
        <br />

        <SessionData />
      </div>
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
