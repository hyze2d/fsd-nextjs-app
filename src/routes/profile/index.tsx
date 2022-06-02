import Link from 'next/link';
import { $user } from '@entities/user';
import { createView } from '@shared/lib/view';
import { profilePage } from './profile.model';

const props = {
  user: $user
};

const Profile = createView()
  .enter(profilePage.enter)
  .props(props)
  .view(({ user }) => (
    <div>
      <h1>Profile / {user?.name}</h1>

      <div>Kek</div>

      <Link href='/album'>To Album</Link>
    </div>
  ));

export { Profile };
