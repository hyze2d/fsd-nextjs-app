import { createEffect, createEvent, restore } from 'effector';

import { theme } from './config';

import type { ThemeOptions } from './types';

const setTheme = createEvent<ThemeOptions>();

const setPropertiesFx = createEffect<ThemeOptions, void>();

const $theme = restore(setTheme, theme.light);

setPropertiesFx.use(theme => {
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(
      `--theme-${key}`,

      value.toString()
    );
  });
});

export { $theme, setTheme, setPropertiesFx };
