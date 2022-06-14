import { $user } from '@entities/user/user.model';
import { createView } from '@shared/lib/view';
import styles from './logged-user.module.scss';

const LoggedUser = createView()
  .props({
    user: $user
  })
  .view(({ user }) => {
    if (!user) return null;

    return (
      <div className={styles.loggedUser}>
        <div className={styles.name}>
          {user.firstName} {user.lastName}
        </div>
      </div>
    );
  });

export { LoggedUser };
