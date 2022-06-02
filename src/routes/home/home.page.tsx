import { useStore } from 'effector-react';
import { useEvent } from 'effector-react/scope';
import type { FC } from 'react';
import { useEffect } from 'react';
import { $profile, mounted } from './home.model';

const Home: FC<{ id: string }> = () => {
  const { user } = useStore($profile);
  const onMount = useEvent(mounted);

  useEffect(() => {
    onMount();
  }, []);

  return <div>Profile / {user?.name}</div>;
};

export { Home };
