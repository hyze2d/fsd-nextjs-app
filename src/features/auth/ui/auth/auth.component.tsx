import { AuthForm } from '@entities/auth/ui';
import { hoc } from '@shared/lib/react/hoc';
import { Button } from '@shared/ui/button';
import { useAuthProps } from './auth.props';

const Auth = hoc(
  useAuthProps,
  ({ session: { user, loading }, onAuthFormSubmit, children }) => {
    return <>{children}</>;

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
