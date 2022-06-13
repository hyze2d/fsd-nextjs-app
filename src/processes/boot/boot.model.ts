import { createEvent, createStore } from 'effector';
import type { NextPageContext } from 'next';

const started = createEvent<NextPageContext>();

const $ready = createStore(false);

$ready.on(started, () => true);

export { $ready, started };
