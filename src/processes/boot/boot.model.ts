import { createEvent, createStore } from 'effector';
import type { PageContext, StaticPageContext } from 'nextjs-effector';

const started = createEvent<PageContext | StaticPageContext>();

const $ready = createStore(false);

$ready.on(started, () => true);

export { $ready, started };
