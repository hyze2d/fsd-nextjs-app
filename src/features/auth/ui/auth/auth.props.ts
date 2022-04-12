import { $session } from '@entities/session';
import { authorize } from '../../model';
import { useEvent, useStore } from 'effector-react';

const useAuthProps = () => {
  const session = useStore($session);
  const onAuthFormSubmit = useEvent(authorize);

  return {
    session,
    onAuthFormSubmit
  };
};

export { useAuthProps };
