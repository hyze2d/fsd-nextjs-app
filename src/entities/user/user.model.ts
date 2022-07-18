import { createEffect, createStore } from 'effector';
import type { User } from './lib';

const getUserFx = createEffect<void, User>();

const $user = createStore<User | null>(null);

$user.on(getUserFx.doneData, (_, user) => user);

getUserFx.use(() => ({
  id: 1,
  firstName: 'John',
  lastName: 'Psina',
  photoUrl: 'https://i.ytimg.com/vi/LZXYFi75c-4/mqdefault.jpg'
}));

export { $user, getUserFx };
