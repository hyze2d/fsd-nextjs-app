import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Button } from '@ui/button';

import { SessionData } from '@entities/session';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <Fragment>
      <div>
        <Link href='/kek'>
          <Button>{t('link')}</Button>
        </Link>
      </div>

      <div>
        <br />
        <SessionData />
      </div>
    </Fragment>
  );
};

const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home']))
  }
});

export { getStaticProps };
export default HomePage;
