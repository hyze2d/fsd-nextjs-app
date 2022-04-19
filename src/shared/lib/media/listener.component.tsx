import { breakpoints } from '@shared/config/breakpoints';
import { useStore } from 'effector-react';
import { useEvent } from 'effector-react/scope';
import { FC, useEffect } from 'react';
import { $media, set } from './model';
import { toRawQuery } from './utils';

const MediaListener: FC = () => {
  const state = useStore($media);
  const onQueryStateUpdate = useEvent(set);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    let listener = () => {
      const result = state.map(item => {
        const raw = toRawQuery(item.query as keyof typeof breakpoints);

        return {
          ...item,
          matches: raw ? matchMedia(raw)?.matches : false
        };
      });

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        onQueryStateUpdate(result);
      }, 100);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [state]);

  return null;
};

export { MediaListener };
