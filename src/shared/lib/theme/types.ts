type Color = {
  main: string;
  hover: string;
  focus: string;
};

type Theme = {
  primary: Color;

  secondary: Color;

  teritary: Color;

  [x: string]: any;
};

export type { Theme };
