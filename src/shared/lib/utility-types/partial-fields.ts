type PartialFields<Source, Target extends string> = Omit<Source, Target> &
  Partial<Pick<Source, Exclude<keyof Source, Target>>>;

export type { PartialFields };
