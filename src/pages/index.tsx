import { useEvent } from 'effector-react';

import type { GetStaticProps, NextPage } from 'next';

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { SessionData } from '@entities/session';

import { environment } from '@shared/config/environment';

import type { Locale } from '@shared/config/i18n';

import { routes } from '@shared/config/routes';

import { useMedia } from '@shared/lib/media';

import { push } from '@shared/router';

import { Button } from '@shared/ui/atoms/button';

const HomePage: NextPage = () => {
  const _navigate = useEvent(push);

  const onLinkClick = () => {
    _navigate(routes.signIn());
  };

  const md = useMedia('>=md');

  const { t } = useTranslation('home');

  console.log(environment, md);

  return (
    <>
      <div>
        <Button onClick={onLinkClick}> {t('link')}</Button>
      </div>

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
