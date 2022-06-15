import { createEvent, createStore } from 'effector';
import type { PageContext } from 'nextjs-effector';

type LayoutController = ReturnType<typeof createLayout>;

const createLayout = () => {
  const started = createEvent<PageContext>();
  const finished = createEvent<PageContext>();

  const $done = createStore(false);
  const $pending = createStore(false);

  $done.on(finished, () => true);

  $pending.on(started, () => true).reset(finished);

  return {
    started,
    finished,
    done: $done,
    pending: $pending
  };
};

export { createLayout };
export type { LayoutController };
