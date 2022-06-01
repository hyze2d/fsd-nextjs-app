import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Page = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('album.tags')}

      <Link href='/'>Home</Link>
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async context => {
  // @ts-expect-error types
  // eslint-disable-next-line
  await context.req.__loadResources__(['album']);

  return {
    props: {
      test: 123
    }
  };
};

export default Page;
export { getServerSideProps };
