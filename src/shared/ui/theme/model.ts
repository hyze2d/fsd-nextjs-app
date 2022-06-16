import { createEffect, restore, sample } from 'effector';

import { createGate } from 'effector-react';

import type { ThemeOptions, ThemeState } from './types';

/**
 * Set current theme
 */
const ThemeGate = createGate<ThemeOptions>();

/**
 * App style theme
 */
const $theme = restore(ThemeGate.state.updates, null);

/**
 * Map theme to style vars
 */
const setPropertiesFx = createEffect((theme: ThemeState) => {
  if (!theme) return;

  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(
      `--theme-${key}`,

      value.toString()
    );
  });
});

sample({
  clock: ThemeGate.open,

  target: setPropertiesFx
});

export { ThemeGate, $theme, setPropertiesFx };
