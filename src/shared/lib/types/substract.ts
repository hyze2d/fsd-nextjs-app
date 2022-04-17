/**
 * @see https://github.com/microsoft/TypeScript/issues/23199#issuecomment-408138056
 */

type SubtractNeverKeys<T> = {
  [K in keyof T]: T[K] extends never ? never : K;
}[keyof T];

type SubtractNever<T> = {
  [K in SubtractNeverKeys<T>]: T[K];
};

export type { SubtractNeverKeys, SubtractNever };
