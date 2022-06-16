type ThemeOptions = {
  // main palette
  primary: string;

  secondary: string;

  teritary: string;

  quaternary: string;

  // text
  text: string;

  // states
  info: string;

  success: string;

  warning: string;

  error: string;
};

type ThemeState = ThemeOptions | null;

export type { ThemeOptions, ThemeState };
