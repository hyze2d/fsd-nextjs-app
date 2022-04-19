import { FC } from 'react';
import { useMedia } from './use-media';

type MediaProps = {
  query: Parameters<typeof useMedia>[0];
};

/**
 * <Media query />
 * useMedia wrapper, doesnt render children if passed query doesnt match
 */
const Media: FC<MediaProps> = ({ children, query }) => {
  const matches = useMedia(query);

  if (!matches) return null;

  return <>{children}</>;
};

export { Media };
