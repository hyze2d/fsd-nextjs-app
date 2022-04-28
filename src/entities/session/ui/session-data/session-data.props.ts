//FIXME: Check `effector-react/scope` vs `effector-react` import
import { useStore } from 'effector-react/scope';

import { $isAuthenticated, $viewerData } from '../../model';

const useSessionData = () => {
  const data = useStore($viewerData);
  const isAuthenticated = useStore($isAuthenticated);

  return {
    data,
    isAuthenticated
  };
};

export { useSessionData };
