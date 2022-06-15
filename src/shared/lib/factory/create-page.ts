import type { Event } from 'effector';
import { createEvent } from 'effector';
import { sample } from 'effector';
import type { PageContext } from 'nextjs-effector';
import type { LayoutController } from './create-layout';

const createPage = (layout?: LayoutController) => {
  const enter: Event<PageContext> = layout
    ? sample({ clock: layout.finished })
    : createEvent<PageContext>();

  return {
    enter
  };
};

export { createPage };
