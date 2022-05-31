// import { allSettled } from 'effector';
import { allSettled } from 'effector';
import { useStore } from 'effector-react';
import type { NextPage } from 'next';
import { $ready } from '@processes/boot';
import { $greeting, hoped } from './page.model';

const Home: NextPage = () => {
  const ready = useStore($ready);

  const greeting = useStore($greeting);

  return (
    <div>
      <div>App {ready ? 'is ready' : 'is not ready'}:</div>

      <div>test</div>

      <div>{greeting}</div>
    </div>
  );
};

Home.getInitialProps = async ({ scope }) => {
  await allSettled(hoped, { scope });

  return {
    test: '123'
  };
};

export { Home };
