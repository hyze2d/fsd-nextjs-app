import { createEvent } from 'effector';
import { createToggle } from './toggle';

const createPage = <Enter = void, Exit = void>() => {
  const enter = createEvent<Enter>();
  const exit = createEvent<Exit>();
  const $isMounted = createToggle(false, enter, exit);

  return {
    exit,
    enter,
    isMounted: $isMounted
  };
};

export { createPage };
