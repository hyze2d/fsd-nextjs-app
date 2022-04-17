//FIXME: Check `effector-react/scope` vs `effector-react` import
import { useStore } from 'effector-react/scope';

import { $isAuthenticated, $viewerData } from '@entities/session';

const useSessionData = () => {
  const data = useStore($viewerData);
  const isAuthenticated = useStore($isAuthenticated);

  return {
    data,
    isAuthenticated
  };
};

export { useSessionData };
