import { createEvent } from 'effector';
import { createToggle } from './toggle';

const createPage = () => {
  const mounted = createEvent();
  const unmounted = createEvent();
  const $isMounted = createToggle(false, mounted, unmounted);

  return {
    mounted,
    unmounted,
    isMounted: $isMounted
  };
};

export { createPage };
