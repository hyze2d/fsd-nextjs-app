import { hoc } from '@lib/react';

import { useSessionData } from './session-data.props';

const SessionData = hoc(useSessionData, ({ isAuthenticated, data }) => (
  <div>
    <hr />

    <h2>User-data</h2>

    <pre>{JSON.stringify({ ...data, isAuthenticated }, null, 4)}</pre>
  </div>
));

export { SessionData };
