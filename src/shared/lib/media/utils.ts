import { breakpoints } from '@shared/config/breakpoints';

const toRawQuery = (text: keyof typeof breakpoints) => {
  let clean = text.replace(/\>|\=|\</gi, '') as typeof text;
  let value = breakpoints[clean];

  if (value) {
    value = Number(clean);
  }

  switch (true) {
    case text.includes('>='):
      return `(min-width: ${value}px)`;

    case text.includes('>'):
      return `(min-width: ${value + 1}px)`;

    case text.includes('<='):
      return `(max-width: ${value + 1}px)`;

    case text.includes('<'):
      return `(max-width: ${value}px)`;

    default:
      return;
  }
};

export { toRawQuery };
