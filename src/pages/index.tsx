import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

//FIXME: Check `effector-react/scope` vs `effector-react` import
import { useStore } from 'effector-react/scope';

import { $user } from '@entities/session';

const HomePage = () => {
  const { t } = useTranslation('home');

  const user = useStore($user);

  return (
    <div>
      <Link href='/kek'>{t('link')}</Link>
    </div>
  );
};

const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home']))
  }
});

export { getStaticProps };
export default HomePage;
