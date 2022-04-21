import { hoc } from '@lib/react';

//FIXME: Replace AuthForm to @features/auth
//FIXME: Replace current component to @feature/auth/auth-guard
import { AuthForm } from '@entities/auth';

import { useAuthProps } from './auth.props';

const Auth = hoc(
  useAuthProps,
  ({ session: { user, loading }, onAuthFormSubmit, children }) => {
    if (loading) return <div>Loading...</div>;

    if (user) return <>{children}</>;

    return (
      <div>
        <AuthForm onSubmit={onAuthFormSubmit} />
      </div>
    );
  }
);

export { Auth };
