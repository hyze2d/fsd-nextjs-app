import { breakpoints } from '@shared/config/breakpoints';
import { createEvent, restore } from 'effector';
import { QueryState } from './types';
import { toRawQuery } from './utils';

const remove = createEvent<string>();

const add = createEvent<string>();

const set = createEvent<QueryState[]>();

const $media = restore<QueryState[]>(set, [])
  .on(add, (state, query) => {
    const raw = toRawQuery(query as keyof typeof breakpoints);

    return [
      ...state,
      {
        query,
        matches: raw ? matchMedia(raw)?.matches : false
      }
    ];
  })

  .on(remove, (state, payload) => {
    const index = state.findIndex(item => item.query == payload);

    // not the best way tho
    return state.splice(index, index);
  });

export { $media, add, remove, set };
