import { $user } from '@entities/session';
import { useStore } from 'effector-react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

const Page = () => {
  const user = useStore($user);

  return (
    <div>
      <Link href='/kek'>GO TO KEK</Link>
    </div>
  );
};

export default Page;
