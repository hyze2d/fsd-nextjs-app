//FIXME: Check `effector-react/scope` vs `effector-react` import
import { useStore } from 'effector-react/scope';

import { hoc } from '@lib/react';

import { $user } from '../../model';

const useSessionData = () => {
  const user = useStore($user);

  return {
    user
  };
};

const SessionData = hoc(useSessionData, ({ user }) => (
  <div>
    <hr />

    <h2>User-data</h2>

    <pre>{JSON.stringify(user, null, 4)}</pre>
  </div>
));

export { SessionData };
