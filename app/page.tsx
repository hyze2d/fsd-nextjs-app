import { allSettled, createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';
import { useEvent } from 'effector-react/scope';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { $ready } from '@processes/boot';
import { $greeting, hoped } from './page.model';
import { Seo } from './page.seo';

const $visits = createStore(0);
const visited = createEvent();

$visits.on([visited, hoped], state => state + 1);

const Home: NextPage = () => {
  const ready = useStore($ready);
  const greeting = useStore($greeting);
  const visits = useStore($visits);
  const { t } = useTranslation();
  const mount = useEvent(visited);

  useEffect(() => {
    mount();
  }, []);

  return (
    <Seo>
      {t('home.title')}

      {t('album.tags')}

      <div>
        <div>App {ready ? 'is ready' : 'is not ready'}:</div>

        <div>visits {visits}</div>
        <div>test</div>

        <div>{greeting}</div>

        <Link href='/bookmarks'>Albums</Link>
        <Link href='/test'>Test</Link>
      </div>
    </Seo>
  );
};

Home.getInitialProps = async ({ scope, loadResources }) => {
  await allSettled(hoped, { scope });
  await loadResources(['home']);

  return {
    test: '123'
  };
};

export { Home, visited, $visits };
