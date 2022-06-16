import { createEvent, createStore, sample } from 'effector';
import { $theme, setTheme, setPropertiesFx, theme } from '@shared/ui/theme';

const started = createEvent();

const mounted = createEvent();

const $ready = createStore(false);

$ready.on(started, () => true);

sample({
  clock: started,

  fn: () => theme.light,

  target: setTheme
});

sample({
  clock: mounted,

  source: $theme,

  target: setPropertiesFx
});

export { $ready, started, mounted };
