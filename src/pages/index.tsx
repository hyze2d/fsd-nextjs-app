import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { SessionData } from '@entities/session';
import { Fragment } from 'react';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <Fragment>
      <div>
        <Link href='/kek'>
          <a>{t('link')}</a>
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
