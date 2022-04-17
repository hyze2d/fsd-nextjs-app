import type { GetStaticProps, NextPage } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Button } from '@ui/button';

import { SessionData } from '@entities/session';

const HomePage: NextPage = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <div>
        <Link href='/kek'>
          <Button>{t('link')}</Button>
        </Link>
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
