type NonNullable<T> = T extends object
  ? { [P in keyof T]: NonNullable<T[P]> }
  : T extends null | undefined
  ? never
  : T;

export type { NonNullable };
