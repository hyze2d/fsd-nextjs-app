import type { Event } from 'effector';
import { createEvent } from 'effector';
import { sample } from 'effector';
import type { PageContext, StaticPageContext } from 'nextjs-effector';
import type { LayoutController } from './create-layout';

const createPage = (layout?: LayoutController) => {
  const enter: Event<PageContext | StaticPageContext> = layout
    ? (sample({ clock: layout.finished }) as Event<
        PageContext | StaticPageContext
      >)
    : createEvent<PageContext | StaticPageContext>();

  return {
    enter
  };
};

export { createPage };
