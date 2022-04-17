import { attach, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { NextRouter } from 'next/router';

type Url = Parameters<NextRouter['push']>[0];

const RouterGate = createGate<{ router: NextRouter | null }>();

const $router = createStore<NextRouter | null>(null, {
  serialize: 'ignore'
})
  .on(RouterGate.open, (_, { router }) => router)
  .reset(RouterGate.close);

const push = createEvent<Url>();

const pushFx = attach({
  source: $router,
  effect: (router, url: Url) => router?.push(url)
});

sample({
  clock: push,
  target: pushFx
});

export { RouterGate, push, pushFx };
