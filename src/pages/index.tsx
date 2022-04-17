import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button } from '@ui/button';
import { SessionData } from '@entities/session';
import { useEvent } from 'effector-react';
import { push } from '@shared/router';

const HomePage: NextPage = () => {
  const _navigate = useEvent(push);
  const onLinkClick = () => {
    _navigate('/kek');
  };

  const { t } = useTranslation('home');

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
