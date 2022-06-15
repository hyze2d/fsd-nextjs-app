import { createEvent, createStore } from 'effector';

const started = createEvent();

const $ready = createStore(false);

$ready.on(started, () => true);

export { $ready, started };
