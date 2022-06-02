type RRecord = {
  [x: string]: RRecord | string;
};

type Path<
  Source extends RRecord,
  Key extends keyof Source = keyof Source
> = `${Key}${Source[Key] extends infer Next
  ? Next extends RRecord
    ? `.${Path<Next>}`
    : ''
  : ''}`;

export type { Path };
