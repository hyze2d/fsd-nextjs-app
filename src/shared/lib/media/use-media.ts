import { breakpoints } from '@shared/config/breakpoints';
import { useEvent, useStoreMap } from 'effector-react';
import { useEffect } from 'react';
import { $media, add, remove } from './model';

type QueryValue = number | keyof typeof breakpoints;

type QueryVariants =
  | `>${QueryValue}`
  | `<${QueryValue}`
  | `>=${QueryValue}`
  | `<=${QueryValue}`;

/**
 * Returns if current query matches
 * Query format accepted is:
 * >=md, <lg, <=sm, >xs and other variations of operator + breakpoint ( for available breakpoints, look for a config/brekapoints )
 */
const useMedia = (query: QueryVariants) => {
  const onMount = useEvent(add);
  const onUnmount = useEvent(remove);

  useEffect(() => {
    onMount(query);

    return () => {
      remove(onUnmount(query));
    };
  }, []);

  return useStoreMap({
    store: $media,
    keys: [query],
    fn: (state, [query]) =>
      state.find(one => one.query == query)?.matches || false
  });
};

export { useMedia };
