import { createEffect } from 'effector';
import Router from 'next/router';

const pushFx = createEffect<Parameters<typeof Router['push']>[0], boolean>();

pushFx.use(async payload => Router.push(payload));

export { pushFx };
