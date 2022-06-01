import { allSettled } from 'effector';
import { useStore } from 'effector-react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { $visits, visited } from 'app/page';

const Bookmarks: NextPage = () => (
  <div>
    Bookmarks
    {useStore($visits)}
    <Link href='/'>Home</Link>
  </div>
);

Bookmarks.getInitialProps = async ({ scope }) => {
  allSettled(visited, { scope });

  return {
    test: 123
  };
};

export { Bookmarks };
