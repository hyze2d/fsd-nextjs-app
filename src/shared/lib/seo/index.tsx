import type { FC } from 'react';

type WithChildrenProps<P = {}> = {
  children: string;
} & P;

const Title: FC<WithChildrenProps> = ({ children }) => (
  <>
    <title>{children}</title>

    <meta property='og:title' content={children} />
  </>
);

const Description: FC<WithChildrenProps> = ({ children }) => (
  <>
    <meta name='description' content={children} />

    <meta name='og:description' content={children} />
  </>
);

const Locale: FC<WithChildrenProps> = ({ children }) => (
  <meta property='og:locale' content={children} />
);

export { Title, Description, Locale };
